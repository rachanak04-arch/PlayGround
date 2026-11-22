#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
PORT="${PORT:-3000}"
[[ "$PORT" =~ ^[0-9]+$ ]] && (( PORT > 0 && PORT < 65536 )) || { echo "PORT must be between 1 and 65535." >&2; exit 1; }
export PORT

run() { /usr/bin/time -p "$@"; }

# Build a Vite project when present; otherwise serve existing static output.
if [[ -f package.json ]]; then
  if [[ ! -d node_modules ]]; then
    if [[ -f package-lock.json ]]; then run npm ci --no-audit --no-fund
    else run npm install --no-audit --no-fund
    fi
  fi
  run npm run build
  OUTPUT_DIR="${STATIC_OUTPUT_DIR:-$PROJECT_DIR/dist}"
  [[ "$OUTPUT_DIR" = /* ]] || OUTPUT_DIR="$PROJECT_DIR/$OUTPUT_DIR"
elif [[ -f index.html ]]; then
  OUTPUT_DIR="$PROJECT_DIR"
elif [[ -f dist/index.html ]]; then
  OUTPUT_DIR="$PROJECT_DIR/dist"
else
  # Keep a valid static deployment target in this otherwise-empty checkout.
  # This is intentionally a diagnostic page, not a substitute for game source.
  OUTPUT_DIR="$PROJECT_DIR/dist"
  run mkdir -p "$OUTPUT_DIR"
  run tee "$OUTPUT_DIR/index.html" >/dev/null <<'HTML'
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#101722"><title>Blockout Arena · Preview</title>
<style>
:root{color-scheme:dark;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;background:#101722;color:#edf4ff}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(ellipse at 50% 0%,#263b4d 0,transparent 58%),linear-gradient(145deg,#111a25,#0a1018);display:grid;place-items:center;padding:24px}.card{width:min(760px,100%);border:1px solid #ffffff20;background:#111b26eF;border-radius:22px;overflow:hidden;box-shadow:0 32px 100px #0008}.top{height:250px;position:relative;overflow:hidden;background:linear-gradient(180deg,#6cb8c0 0%,#9ed0c1 58%,#5f8580 59%,#384d48 100%)}.sun{position:absolute;width:72px;height:72px;border-radius:50%;background:#ffe5a0;right:15%;top:32px;box-shadow:0 0 52px #ffe5a088}.block{position:absolute;bottom:0;background:#40505b;box-shadow:inset 0 7px #ffffff18}.b1{left:10%;width:112px;height:100px}.b2{left:29%;width:90px;height:150px;background:#627b78}.b3{right:25%;width:120px;height:128px;background:#4d6561}.b4{right:6%;width:90px;height:82px}.avatar{position:absolute;bottom:33px;left:50%;transform:translateX(-50%);width:45px;height:78px;background:#ffb348;box-shadow:0 0 0 12px #25354a44}.avatar:before{content:"";position:absolute;top:-28px;left:7px;width:31px;height:28px;background:#f3c79c}.avatar:after{content:"";position:absolute;top:-35px;left:5px;width:35px;height:10px;background:#3c3240}.gun{position:absolute;bottom:48px;left:calc(50% + 15px);width:62px;height:12px;background:#202733;transform:rotate(-12deg);box-shadow:30px 0 0 -3px #d4dfdc}.content{padding:30px clamp(22px,6vw,48px) 36px}.eyebrow{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8ce5c0;font-weight:800}.title{font-size:clamp(28px,6vw,46px);line-height:1.04;margin:12px 0 14px;letter-spacing:-.04em}.copy{color:#aab8ca;line-height:1.65;max-width:570px;margin:0}.status{display:flex;align-items:center;gap:10px;margin-top:25px;padding:14px 16px;border:1px solid #f0bc6840;background:#f0bc6810;border-radius:12px;color:#f5d69f;font-size:14px}.dot{width:9px;height:9px;border-radius:50%;background:#f2b856;box-shadow:0 0 12px #f2b85688;flex:none}.foot{margin-top:22px;color:#8190a3;font-size:12px}@media(max-width:520px){body{padding:14px}.top{height:200px}.content{padding:24px 20px 26px}.status{align-items:flex-start}}
</style></head>
<body><main class="card" aria-label="Blockout Arena preview"><div class="top" aria-hidden="true"><div class="sun"></div><div class="block b1"></div><div class="block b2"></div><div class="block b3"></div><div class="block b4"></div><div class="avatar"></div><div class="gun"></div></div><section class="content"><div class="eyebrow">Blockout Arena · Preview</div><h1 class="title">The arena is ready.<br>Game source is missing.</h1><p class="copy">The project checkout contains startup and capture scripts, but no game source, package manifest, or built application. This page confirms that the static preview server is healthy; it is not the playable shooter.</p><div class="status"><span class="dot"></span><span>Preview server online · waiting for project files</span></div><div class="foot">Add the game files in the project directory, then restart to build and serve them.</div></section></main></body></html>
HTML
fi

[[ -d "$OUTPUT_DIR" && -f "$OUTPUT_DIR/index.html" ]] || { echo "Static build output must contain index.html: $OUTPUT_DIR" >&2; exit 1; }
OUTPUT_DIR="$(cd "$OUTPUT_DIR" && pwd)"
case "$OUTPUT_DIR/" in "$PROJECT_DIR/"*) ;; *) echo "Static output must stay inside $PROJECT_DIR" >&2; exit 1 ;; esac

# Deployment metadata belongs to the worker, not to the app's built files.
DEPLOYMENT_FILE="/home/runner/work/_temp/omgithub-web/deployment-output.json"
run mkdir -p "$(dirname "$DEPLOYMENT_FILE")"
run node -e 'const fs=require("node:fs"); fs.writeFileSync(process.argv[1], JSON.stringify({project:process.argv[2],directory:process.argv[3]}))' "$DEPLOYMENT_FILE" "$PROJECT_DIR" "$OUTPUT_DIR"

# Foreground server: the controller owns the process lifecycle and can reuse it.
cd "$OUTPUT_DIR"
run python3 -m http.server "$PORT" --bind 0.0.0.0
