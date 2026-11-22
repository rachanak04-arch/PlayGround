#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
run() { /usr/bin/time -p "$@"; }

: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL.}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR to the evidence directory.}"
case "$CAPTURE_URL" in http://*|https://*) ;; *) echo "CAPTURE_URL must be an HTTP(S) URL." >&2; exit 1 ;; esac

RUNTIME_DIR="${RUNTIME_DIR:-/home/runner/work/_temp/omgithub-runtime}"
CAPTURE_RUNNER="$RUNTIME_DIR/scripts/default-capture.mjs"
PLAYWRIGHT_ROOT="$HOME/.local/share/omgithub-playwright"

run bash -n "$PROJECT_DIR/capture.sh"
if [[ ! -f "$CAPTURE_RUNNER" || ! -f "$PLAYWRIGHT_ROOT/linux.json" || ! -d "$PLAYWRIGHT_ROOT/node_modules/playwright" ]]; then
  echo "Browser capture runtime is unavailable; retry after worker browser setup." >&2
  exit 75
fi
run mkdir -p "$CAPTURE_DIR"
# The runtime opens CAPTURE_URL verbatim, waits for the page to render, captures both
# viewport sizes, and closes its own browser in a finally block. Strict mode makes
# page errors and failed same-origin resources rendering defects (exit 1).
run env RUNTIME_DIR="$RUNTIME_DIR" CAPTURE_URL="$CAPTURE_URL" CAPTURE_DIR="$CAPTURE_DIR" CAPTURE_STRICT=1 node "$CAPTURE_RUNNER"
