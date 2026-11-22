// Cross-tab multiplayer. Uses BroadcastChannel so opening the game in another
// browser tab adds a real human player to your match. The oldest tab is host
// and owns bot health; other tabs send hit events to it.
export class ArenaNet {
  constructor(handlers = {}) {
    this.handlers = handlers
    this.id = Math.random().toString(36).slice(2, 10)
    this.born = Date.now() + Math.random()
    this.peers = new Map()
    this.host = false
    this.channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('blockstrike-arena-v1') : null
    this.lastState = 0
    if (this.channel) {
      this.channel.onmessage = (e) => this.onMessage(e.data)
      this.send('hello', { id: this.id, born: this.born })
    }
  }

  send(type, data = {}, target = null) {
    if (!this.channel) return
    this.channel.postMessage({ type, from: this.id, to: target, born: this.born, data })
  }

  get peerCount() { return this.peers.size + 1 }

  recomputeHost() {
    let host = true
    for (const p of this.peers.values()) if (p.born < this.born) host = false
    if (host !== this.host) {
      this.host = host
      this.handlers.onHostChange?.(host)
    }
  }

  onMessage(msg) {
    if (!msg || msg.from === this.id) return
    if (msg.to && msg.to !== this.id) return
    const known = this.peers.get(msg.from)
    if (known) known.last = performance.now()
    const d = msg.data || {}
    if (msg.type === 'hello') {
      this.peers.set(msg.from, { id: msg.from, born: msg.born, last: performance.now(), state: null })
      this.send('welcome', { id: this.id, born: this.born }, msg.from)
      this.recomputeHost()
      return
    }
    if (msg.type === 'welcome' || msg.type === 'state') {
      if (!this.peers.has(msg.from)) this.peers.set(msg.from, { id: msg.from, born: msg.born, last: performance.now(), state: null })
      const p = this.peers.get(msg.from)
      p.last = performance.now()
      if (msg.type === 'state') {
        p.state = d
        this.handlers.onPeerState?.(msg.from, d)
      } else {
        this.handlers.onPeerState?.(msg.from, d.state || null)
      }
      this.recomputeHost()
      return
    }
    switch (msg.type) {
      case 'botHit': this.handlers.onRemoteBotHit?.(d); break
      case 'botHp': this.handlers.onBotHp?.(d); break
      case 'playerDamage': this.handlers.onPlayerDamage?.(d); break
      case 'kill': this.handlers.onRemoteKill?.(d); break
      case 'leave': this.peers.delete(msg.from); this.recomputeHost(); this.handlers.onPeerLeave?.(msg.from); break
      default: break
    }
  }

  broadcastPlayerState(state) {
    const now = performance.now()
    if (now - this.lastState < 55) return
    this.lastState = now
    this.send('state', state)
  }

  update() {
    const now = performance.now()
    for (const [id, p] of this.peers) {
      if (now - p.last > 4000) {
        this.peers.delete(id)
        this.handlers.onPeerLeave?.(id)
        this.recomputeHost()
      }
    }
  }

  leave() {
    this.send('leave', {})
    this.channel?.close()
    this.channel = null
    this.peers.clear()
  }
}
