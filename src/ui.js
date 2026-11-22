import * as THREE from 'three'
import { createBlockAvatar, createWeaponModel, createMeleeModel, createGrenadeModel, mat } from './avatar.js'
import { ALL_SKINS, WEAPONS, KILL_TARGET, ARENA_HALF } from './data.js'

const $ = (id) => document.getElementById(id)

export class UI {
  constructor(game) {
    this.game = game
    this.el = {
      loading: $('loading'), menu: $('menu'), hud: $('hud'), pause: $('pause'),
      customize: $('customize'), how: $('how'), scoreboard: $('scoreboard'), matchEnd: $('matchEnd'),
      touch: $('touchControls'), toast: $('toast'),
      menuCoins: $('menuCoins'), menuOnline: $('menuOnline'),
      statKills: $('statKills'), statWins: $('statWins'), statBest: $('statBest'),
      loadoutSkinName: $('loadoutSkinName'), loadoutGunName: $('loadoutGunName'),
      loadoutAvatar: $('loadoutAvatar'),
      matchTime: $('matchTime'), matchProgress: $('matchProgress'),
      hudKills: $('hudKills'), leaderboardMini: $('leaderboardMini'),
      killfeed: $('killfeed'), crosshair: $('crosshair'), hitmarker: $('hitmarker'),
      scope: $('scopeOverlay'), damage: $('damageVignette'), lowHealth: $('lowHealth'),
      killBanner: $('killBanner'), killBannerTitle: $('killBannerTitle'), killBannerSub: $('killBannerSub'),
      respawn: $('respawn'), respawnTime: $('respawnTime'), respawnTip: $('respawnTip'),
      healthValue: $('healthValue'), healthBar: $('healthBar'),
      weaponSlots: $('weaponSlots'), ammoWeapon: $('ammoWeapon'), ammoSkin: $('ammoSkin'),
      ammoCurrent: $('ammoCurrent'), ammoReserve: $('ammoReserve'),
      reloadBar: $('reloadBar'), reloadHint: $('reloadHint'),
      scoreboardTime: $('scoreboardTime'), scoreRows: $('scoreRows'),
      custCoins: $('custCoins'), skinGrid: $('skinGrid'), previewLabel: $('previewLabel'), previewSub: $('previewSub'),
      endTitle: $('endTitle'), endSub: $('endSub'), endResults: $('endResults'),
      pickupToast: $('pickupToast'),
    }
    this.activeTab = 'avatar'
    this.lastHit = 0
    this.lastKillBanner = 0
    this.toastTimer = 0
    this.pickupTimer = 0
    this.setupPreview()
    this.bindMenuButtons()
    this.bindTouch()
    this.refreshLoadout()
  }

  bindMenuButtons() {
    $('playBtn').onclick = () => this.game.startMatch()
    $('customizeBtn').onclick = () => this.openCustomize('avatar')
    $('howBtn').onclick = () => { this.el.how.classList.remove('hidden'); this.game.sfx?.click() }
    $('closeHow').onclick = () => this.el.how.classList.add('hidden')
    $('closeCustomize').onclick = () => this.closeCustomize()
    $('resumeBtn').onclick = () => this.game.resume()
    $('pauseCustomizeBtn').onclick = () => this.openCustomize('avatar')
    $('quitBtn').onclick = () => this.game.quitToMenu()
    $('rematchBtn').onclick = () => this.game.startMatch()
    $('endCustomizeBtn').onclick = () => this.openCustomize('avatar')
    $('endMenuBtn').onclick = () => this.game.quitToMenu()
    document.querySelectorAll('.cust-tab').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.cust-tab').forEach(b => b.classList.toggle('active', b === btn))
        this.openCustomize(btn.dataset.tab, true)
      }
    })
  }

  bindTouch() {
    const move = $('touchMove'), stick = $('touchStick'), look = $('touchLook')
    let moveId = null, lookId = null, lx = 0, ly = 0
    const updateStick = (e) => {
      const r = move.getBoundingClientRect()
      let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2)
      const max = r.width * 0.36
      const d = Math.hypot(dx, dy)
      if (d > max) { dx *= max / d; dy *= max / d }
      stick.style.transform = `translate(${dx}px,${dy}px)`
      lx = dx / max; ly = dy / max
      this.game.touchMove = { x: lx, y: ly }
    }
    move.addEventListener('pointerdown', e => { moveId = e.pointerId; move.setPointerCapture(e.pointerId); updateStick(e) })
    move.addEventListener('pointermove', e => { if (e.pointerId === moveId) updateStick(e) })
    const endMove = e => { if (e.pointerId !== moveId) return; moveId = null; stick.style.transform = ''; this.game.touchMove = { x: 0, y: 0 } }
    move.addEventListener('pointerup', endMove); move.addEventListener('pointercancel', endMove)

    let lastX = 0, lastY = 0
    look.addEventListener('pointerdown', e => { lookId = e.pointerId; look.setPointerCapture(e.pointerId); lastX = e.clientX; lastY = e.clientY })
    look.addEventListener('pointermove', e => {
      if (e.pointerId !== lookId) return
      this.game.onMouseMove(e.clientX - lastX, e.clientY - lastY)
      lastX = e.clientX; lastY = e.clientY
    })
    const endLook = e => { if (e.pointerId === lookId) lookId = null }
    look.addEventListener('pointerup', endLook); look.addEventListener('pointercancel', endLook)

    const hold = (id, down, up) => {
      const b = $(id)
      b.addEventListener('pointerdown', e => { e.preventDefault(); b.classList.add('pressed'); down() })
      b.addEventListener('pointerup', e => { e.preventDefault(); b.classList.remove('pressed'); up?.() })
      b.addEventListener('pointercancel', () => { b.classList.remove('pressed'); up?.() })
    }
    hold('touchFire', () => this.game.touchFire = true, () => this.game.touchFire = false)
    hold('touchAim', () => this.game.touchAim = true, () => this.game.touchAim = false)
    $('touchJump').addEventListener('pointerdown', e => { e.preventDefault(); this.game.jump() })
    $('touchReload').addEventListener('pointerdown', e => { e.preventDefault(); this.game.reload() })
    $('touchSwap').addEventListener('pointerdown', e => { e.preventDefault(); this.game.switchWeapon(this.game.player.weaponIndex + 1) })
  }

  setupPreview() {
    const canvas = $('previewCanvas')
    try {
      this.preview = {
        renderer: new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' }),
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(38, 1, 0.1, 50),
      }
      const r = this.preview.renderer
      r.setPixelRatio(Math.min(devicePixelRatio, 1.5))
      r.shadowMap.enabled = true
      r.shadowMap.type = THREE.PCFShadowMap
      const s = this.preview.scene
      s.add(new THREE.HemisphereLight(0xffffff, 0x34435e, 2.2))
      const l = new THREE.DirectionalLight(0xffffff, 2.2); l.position.set(4, 8, 6); l.castShadow = true; s.add(l)
      const floor = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.1, 0.16, 12), mat(0x2f4664))
      floor.position.y = -0.02; floor.receiveShadow = true; s.add(floor)
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.05, 6, 16), mat(0x5ce1b9, { emissive: 0x5ce1b9, emissiveIntensity: 0.6 }))
      ring.rotation.x = Math.PI / 2; ring.position.y = 0.08; s.add(ring)
      this.preview.root = new THREE.Group(); s.add(this.preview.root)
      this.preview.camera.position.set(0, 1.75, 5.4)
      this.preview.camera.lookAt(0, 1.1, 0)
      this.preview.ring = ring
      this.rebuildPreview()
    } catch (err) {
      console.warn('Skin preview unavailable:', err)
      this.preview = null
    }
  }

  rebuildPreview() {
    if (!this.preview) return
    const root = this.preview.root
    while (root.children.length) root.remove(root.children[0])
    const g = this.game
    const avatar = createBlockAvatar(g.getSkin('avatar'), { scale: 1.05 })
    root.add(avatar.group)
    const weapon = createWeaponModel(WEAPONS[g.player.weaponIndex], g.getSkin('gun'))
    weapon.position.set(0.3, 1.16, 0.42); weapon.scale.setScalar(1.15)
    root.add(weapon)
    const melee = createMeleeModel(g.getSkin('melee'))
    melee.position.set(-0.42, 0.8, 0.2); melee.scale.setScalar(0.7)
    root.add(melee)
    const grenade = createGrenadeModel(g.getSkin('grenade'))
    grenade.position.set(0.6, 0.55, 0.3); grenade.scale.setScalar(0.9)
    root.add(grenade)
    this.preview.avatar = avatar
  }

  updatePreview(dt, t) {
    if (!this.preview || this.el.customize.classList.contains('hidden')) return
    const r = this.preview.renderer
    const rect = $('previewCanvas').getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0 && (r.domElement.width !== Math.floor(rect.width * r.getPixelRatio()) || r.domElement.height !== Math.floor(rect.height * r.getPixelRatio()))) {
      r.setSize(rect.width, rect.height, false)
      this.preview.camera.aspect = rect.width / rect.height
      this.preview.camera.updateProjectionMatrix()
    }
    this.preview.root.rotation.y = Math.sin(t * 0.65) * 0.5
    this.preview.ring.rotation.z += dt
    this.preview.renderer.render(this.preview.scene, this.preview.camera)
  }

  show(name) {
    for (const k of ['loading', 'menu', 'hud', 'pause', 'scoreboard', 'matchEnd', 'how']) {
      this.el[k].classList.toggle('hidden', k !== name)
    }
  }

  refreshLoadout() {
    const g = this.game
    const a = g.getSkin('avatar'), w = g.getSkin('gun')
    this.el.loadoutSkinName.textContent = a.name
    this.el.loadoutGunName.textContent = `${WEAPONS[g.player.weaponIndex].name} · ${w.name}`
    this.el.menuCoins.textContent = g.coins
    this.el.statKills.textContent = g.stats.kills
    this.el.statWins.textContent = g.stats.wins
    this.el.statBest.textContent = g.stats.best
    // CSS loadout avatar colors
    const av = this.el.loadoutAvatar
    av.querySelector('.block-head').style.background = `#${a.head.toString(16).padStart(6, '0')}`
    const torso = av.querySelector('.block-body')
    torso.style.background = `#${a.torso.toString(16).padStart(6, '0')}`
    av.querySelector('.block-arms').style.background = `linear-gradient(90deg, #${a.arms.toString(16).padStart(6,'0')} 0 18px, transparent 18px calc(100% - 18px), #${a.torso.toString(16).padStart(6,'0')} calc(100% - 18px))`
    av.querySelector('.block-legs').style.background = `linear-gradient(90deg, #${a.legs.toString(16).padStart(6,'0')} 0 24px, transparent 24px 32px, #${a.legs.toString(16).padStart(6,'0')} 32px)`
    this.el.custCoins.textContent = g.coins
    this.updateWeaponSlots()
  }

  openCustomize(tab = this.activeTab, keepTab = false) {
    this.activeTab = tab
    document.querySelectorAll('.cust-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab))
    this.el.customize.classList.remove('hidden')
    this.renderSkins(tab)
    this.rebuildPreview()
    this.game.sfx?.click()
  }

  closeCustomize() {
    this.el.customize.classList.add('hidden')
    this.game.sfx?.click()
    this.refreshLoadout()
    if (this.game.state === 'menu') this.show('menu')
    else if (this.game.state === 'paused') this.show('pause')
  }

  renderSkins(tab) {
    const g = this.game
    const list = ALL_SKINS[tab]
    const owned = g.owned[tab]
    const selected = g.equipped[tab]
    this.el.skinGrid.innerHTML = ''
    list.forEach(s => {
      const isOwned = owned.includes(s.id)
      const isSelected = selected === s.id
      const card = document.createElement('button')
      card.className = 'skin-card' + (isSelected ? ' selected' : '') + (isOwned ? '' : ' locked')
      const c1 = `#${(s.torso ?? s.body).toString(16).padStart(6, '0')}`
      const c2 = `#${(s.legs ?? s.accent ?? s.body ?? 0x333333).toString(16).padStart(6, '0')}`
      card.innerHTML = `
        <div class="skin-swatch" style="background:linear-gradient(135deg, ${c1} 0 48%, ${c2} 48% 100%)"></div>
        <div class="skin-name">${s.name}</div>
        <div class="skin-meta">${isSelected ? '✓ EQUIPPED' : isOwned ? s.rarity : `◈ ${s.price}`}</div>
        ${!isOwned && !isSelected ? `<div class="skin-price">◈ ${s.price}</div>` : ''}
      `
      card.onclick = () => {
        if (isOwned) { g.equipSkin(tab, s.id); this.renderSkins(tab); this.rebuildPreview(); this.refreshLoadout(); this.game.sfx?.click() }
        else if (g.coins >= s.price) { g.buySkin(tab, s); this.renderSkins(tab); this.rebuildPreview(); this.refreshLoadout() }
        else { this.game.sfx?.deny(); this.toast(`Need ${s.price - g.coins} more coins`) }
      }
      this.el.skinGrid.appendChild(card)
    })
    const sel = list.find(s => s.id === selected) || list[0]
    this.el.previewLabel.textContent = sel.name.toUpperCase()
    this.el.previewSub.textContent = `${sel.rarity} · ${tab === 'avatar' ? 'AVATAR SKIN' : tab === 'gun' ? 'WEAPON FINISH' : tab === 'melee' ? 'MELEE SKIN' : 'GRENADE SKIN'}`
  }

  updateWeaponSlots() {
    const g = this.game, p = g.player
    this.el.weaponSlots.innerHTML = ''
    WEAPONS.forEach((w, i) => {
      const d = document.createElement('div')
      d.className = 'wslot' + (i === p.weaponIndex ? ' active' : '')
      d.innerHTML = `<b>${i + 1}</b><span>${w.short}</span><i><em style="width:${Math.max(0, p.ammo[i] / w.mag * 100)}%"></em></i>`
      this.el.weaponSlots.appendChild(d)
    })
  }

  updateHud(game) {
    const p = game.player
    const secs = Math.max(0, Math.ceil(game.matchTime))
    this.el.matchTime.textContent = `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`
    this.el.matchProgress.style.width = `${Math.max(0, secs / game.matchDuration * 100)}%`
    this.el.hudKills.textContent = p.kills
    this.el.healthValue.textContent = Math.max(0, Math.ceil(p.health))
    this.el.healthBar.style.width = `${Math.max(0, p.health)}%`
    this.el.lowHealth.style.opacity = p.health < 30 && p.alive ? '1' : '0'

    const w = WEAPONS[p.weaponIndex]
    this.el.ammoWeapon.textContent = w.name
    this.el.ammoSkin.textContent = game.getSkin('gun').name.toUpperCase()
    this.el.ammoCurrent.textContent = p.ammo[p.weaponIndex]
    this.el.ammoReserve.textContent = p.reserve[p.weaponIndex]
    const reloading = p.reloadTimer > 0
    this.el.reloadBar.classList.toggle('show', reloading)
    this.el.reloadBar.firstElementChild.style.width = reloading ? `${(1 - p.reloadTimer / w.reload) * 100}%` : '0%'
    this.el.reloadHint.textContent = reloading ? 'RELOADING…' : (p.ammo[p.weaponIndex] === 0 ? 'PRESS R TO RELOAD' : 'R TO RELOAD')
    this.el.reloadHint.style.color = p.ammo[p.weaponIndex] === 0 ? '#ff5364' : ''

    this.el.crosshair.classList.toggle('scoped', p.aiming && w.id === 'sniper')
    this.el.scope.classList.toggle('show', p.aiming && w.id === 'sniper')
    this.el.respawn.classList.toggle('hidden', p.alive)
    if (!p.alive) this.el.respawnTime.textContent = Math.max(1, Math.ceil(p.respawnTimer))
    this.el.damage.style.opacity = Math.max(0, (p.damageFlash || 0)) * 0.85

    // Leaderboard (sorted by kills)
    const rows = game.scoreboardEntries()
    this.el.leaderboardMini.innerHTML = rows.slice(0, 5).map((r, i) =>
      `<div class="lb-row ${r.me ? 'me' : ''}"><span>${i + 1}. ${r.name}</span><span>${r.kills}</span></div>`).join('')
    if (!this.el.scoreboard.classList.contains('hidden')) this.updateScoreboard(game)
    this.updateWeaponSlots()
  }

  updateScoreboard(game) {
    const rows = game.scoreboardEntries()
    this.el.scoreRows.innerHTML = rows.map((r, i) =>
      `<div class="score-row ${r.me ? 'me' : ''}"><span>${i + 1}</span><span>${r.name}</span><span>${r.kills}</span><span>${r.deaths}</span><span>${r.streak}</span></div>`).join('')
    this.el.scoreboardTime.textContent = `${Math.ceil(game.matchTime)}s REMAINING · FIRST TO ${KILL_TARGET}`
  }

  addKill(killer, victim, weapon, head) {
    const d = document.createElement('div')
    d.className = 'kf-item'
    d.innerHTML = `<b>${killer}</b> ${head ? '☠' : '✕'} ${weapon} ${head ? 'HEADSHOT' : ''} <i>${victim}</i>`
    this.el.killfeed.prepend(d)
    setTimeout(() => d.remove(), 5200)
    while (this.el.killfeed.children.length > 5) this.el.killfeed.lastChild.remove()
  }

  showHit(head) {
    const now = performance.now()
    if (now - this.lastHit < 40) return
    this.lastHit = now
    this.el.hitmarker.classList.toggle('head', head)
    this.el.hitmarker.classList.add('show')
    clearTimeout(this._hitTimer)
    this._hitTimer = setTimeout(() => this.el.hitmarker.classList.remove('show'), 120)
  }

  showKillBanner(name, coins) {
    this.el.killBannerTitle.textContent = name === 'HEADSHOT!' ? 'HEADSHOT!' : 'ELIMINATED!'
    this.el.killBannerSub.textContent = `+${coins} ◈  ${name !== 'HEADSHOT!' ? name.toUpperCase() : ''}`
    this.el.killBanner.classList.add('show')
    clearTimeout(this._killTimer)
    this._killTimer = setTimeout(() => this.el.killBanner.classList.remove('show'), 1400)
  }

  showPickup(text) {
    this.el.pickupToast.textContent = text
    this.el.pickupToast.classList.add('show')
    clearTimeout(this.pickupTimer)
    this.pickupTimer = setTimeout(() => this.el.pickupToast.classList.remove('show'), 1000)
  }

  toast(text) {
    this.el.toast.textContent = text
    this.el.toast.classList.add('show')
    clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => this.el.toast.classList.remove('show'), 2000)
  }

  showEnd(rows, won) {
    this.el.endTitle.textContent = won ? 'VICTORY!' : 'MATCH OVER'
    this.el.endSub.textContent = won ? 'You ruled the block. Nice shooting!' : 'Good run, block-head. Go again?'
    const me = rows.find(r => r.me)
    this.el.endResults.innerHTML = `
      <div><b>#${rows.findIndex(r => r.me) + 1}</b><span>PLACE</span></div>
      <div><b>${me?.kills || 0}</b><span>KILLS</span></div>
      <div><b>${me?.deaths || 0}</b><span>DEATHS</span></div>
      <div><b>${me?.streak || 0}</b><span>STREAK</span></div>`
    this.show('matchEnd')
  }

  setOnline(count) {
    this.el.menuOnline.textContent = `ONLINE · ${count} PLAYERS`
  }
}
