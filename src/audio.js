// Tiny synthesized sound library - no external audio files needed.
export class Sfx {
  constructor() {
    this.ctx = null
    this.master = null
    this.enabled = true
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.32
    this.master.connect(this.ctx.destination)
  }
  tone(freq, dur, type = 'square', vol = 0.25, slide = 0) {
    if (!this.enabled || !this.ctx) return
    const t = this.ctx.currentTime
    const o = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur)
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur)
    o.connect(g); g.connect(this.master)
    o.start(t); o.stop(t + dur + 0.02)
  }
  noise(dur = 0.1, vol = 0.25, filterFreq = 1200) {
    if (!this.enabled || !this.ctx) return
    const t = this.ctx.currentTime
    const len = Math.floor(this.ctx.sampleRate * dur)
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = this.ctx.createBufferSource(); src.buffer = buf
    const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = filterFreq
    const g = this.ctx.createGain(); g.gain.value = vol
    src.connect(filter); filter.connect(g); g.connect(this.master)
    src.start()
  }
  shoot(weapon) {
    if (weapon === 'shotgun') { this.noise(0.22, 0.5, 900); this.tone(90, 0.16, 'sawtooth', 0.3, -50) }
    else if (weapon === 'sniper') { this.noise(0.28, 0.45, 1800); this.tone(140, 0.22, 'square', 0.22, -90) }
    else if (weapon === 'smg') { this.noise(0.06, 0.25, 2400); this.tone(210, 0.05, 'square', 0.12, -60) }
    else { this.noise(0.1, 0.35, 2000); this.tone(160, 0.08, 'square', 0.18, -70) }
  }
  hit() { this.tone(880, 0.06, 'sine', 0.22, 220) }
  headshot() { this.tone(1200, 0.09, 'sine', 0.25, 600); this.tone(1600, 0.12, 'triangle', 0.15, 400) }
  kill() { this.tone(660, 0.1, 'triangle', 0.25); setTimeout(() => this.tone(990, 0.18, 'triangle', 0.22), 85) }
  hurt() { this.tone(140, 0.16, 'sawtooth', 0.25, -60); this.noise(0.08, 0.18, 500) }
  jump() { this.tone(330, 0.1, 'square', 0.12, 200) }
  land() { this.noise(0.07, 0.14, 300) }
  reload() { this.tone(300, 0.05, 'square', 0.14); setTimeout(() => this.tone(420, 0.06, 'square', 0.14), 170) }
  pickup() { this.tone(660, 0.08, 'sine', 0.2); setTimeout(() => this.tone(990, 0.14, 'sine', 0.2), 80) }
  click() { this.tone(520, 0.04, 'square', 0.1) }
  buy() { this.tone(523, 0.09, 'triangle', 0.2); setTimeout(() => this.tone(784, 0.14, 'triangle', 0.2), 90) }
  deny() { this.tone(180, 0.14, 'sawtooth', 0.18, -60) }
  swing() { this.noise(0.12, 0.18, 800) }
  tick() { this.tone(880, 0.06, 'sine', 0.12) }
}
