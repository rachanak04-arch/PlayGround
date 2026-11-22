import * as THREE from 'three'
import { createArena, createLobby } from './world.js'
import { createBlockAvatar, createWeaponModel, createMeleeModel, createGrenadeModel, mat } from './avatar.js'
import { Effects } from './effects.js'
import { Sfx } from './audio.js'
import { ArenaNet } from './net.js'
import { UI } from './ui.js'
import {
  WEAPONS, ALL_SKINS, AVATAR_SKINS, GUN_SKINS, MELEE_SKINS, GRENADE_SKINS,
  BOT_NAMES, RESPAWN_TIPS, MATCH_DURATION, KILL_TARGET,
} from './data.js'

const SAVE_KEY = 'blockstrike-save-v1'
const tmpVec = new THREE.Vector3()
const tmpVec2 = new THREE.Vector3()
const raycaster = new THREE.Raycaster()

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)) }
function rand(a, b) { return a + Math.random() * (b - a) }

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas')
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.NoToneMapping

    this.arena = createArena()
    this.effects = new Effects(this.arena.scene)
    this.lobby = createLobby()
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 500)
    this.sfx = new Sfx()

    this.load()
    this.net = new ArenaNet({
      onPeerState: (id, s) => this.onPeerState(id, s),
      onPeerLeave: (id) => this.onPeerLeave(id),
      onRemoteBotHit: (d) => this.onRemoteBotHit(d),
      onBotHp: (d) => this.onBotHp(d),
      onPlayerDamage: (d) => this.onPlayerDamage(d),
      onRemoteKill: (d) => this.onRemoteKill(d),
    })

    this.player = this.makePlayer()
    this.bots = this.makeBots()
    this.remotes = new Map()
    this.projectiles = []
    this.state = 'menu'
    this.matchTime = MATCH_DURATION
    this.matchDuration = MATCH_DURATION
    this.time = 0
    this.keys = {}
    this.touchMove = { x: 0, y: 0 }
    this.touchFire = false
    this.touchAim = false
    this.waitingFireRelease = false
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    this.suppressPause = false
    this.killSeen = new Set()

    this.ui = new UI(this)
    this.bindEvents()
    this.onResize()
    this.last = performance.now()
    requestAnimationFrame((t) => this.loop(t))
    // Reveal the live 3D lobby once the first frame is ready.
    requestAnimationFrame(() => {
      document.getElementById('loading').classList.add('hidden')
      document.getElementById('menu').classList.remove('hidden')
      this.ui.setOnline(this.net.peerCount + 8)
    })
  }

  /* ---------------- persistence & skins ---------------- */
  load() {
    const fresh = {
      coins: 500,
      owned: {
        avatar: ['classic', 'ninja'], gun: ['factory', 'carbon'],
        melee: ['pipe'], grenade: ['classic'],
      },
      equipped: { avatar: 'classic', gun: 'factory', melee: 'pipe', grenade: 'classic' },
      stats: { kills: 0, wins: 0, best: 0 },
    }
    try {
      const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null')
      if (saved && typeof saved === 'object') {
        fresh.coins = Number.isFinite(saved.coins) ? saved.coins : fresh.coins
        for (const cat of Object.keys(fresh.owned)) {
          if (Array.isArray(saved.owned?.[cat])) fresh.owned[cat] = saved.owned[cat]
          if (saved.equipped?.[cat]) fresh.equipped[cat] = saved.equipped[cat]
        }
        Object.assign(fresh.stats, saved.stats || {})
      }
    } catch (e) { /* ignore corrupt save */ }
    this.coins = fresh.coins
    this.owned = fresh.owned
    this.equipped = fresh.equipped
    this.stats = fresh.stats
    this.save()
  }
  save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        coins: this.coins, owned: this.owned, equipped: this.equipped, stats: this.stats,
      }))
    } catch (e) { /* storage unavailable */ }
  }
  getSkin(cat) {
    const list = ALL_SKINS[cat]
    return list.find(s => s.id === this.equipped[cat]) || list[0]
  }
  isOwned(cat, id) { return this.owned[cat].includes(id) }
  equipSkin(cat, id) {
    if (!this.isOwned(cat, id)) return
    this.equipped[cat] = id
    this.save()
    this.applyLoadout()
  }
  buySkin(cat, skin) {
    if (this.coins < skin.price || this.isOwned(cat, skin.id)) return false
    this.coins -= skin.price
    this.owned[cat].push(skin.id)
    this.equipped[cat] = skin.id
    this.save()
    this.applyLoadout()
    this.sfx.buy()
    this.ui.toast(`Unlocked ${skin.name}!`)
    return true
  }
  applyLoadout() {
    if (!this.player) return
    const skin = this.getSkin('avatar')
    this.player.avatar.setSkin(skin)
    this.rebuildModels(this.player)
    for (const b of this.bots) { /* bots keep their own identities */ }
    this.ui?.refreshLoadout()
    this.ui?.rebuildPreview()
  }

  rebuildModels(ent) {
    if (ent.weaponModels) ent.weaponModels.forEach(m => ent.avatar.weaponAnchor.remove(m))
    ent.weaponModels = WEAPONS.map(w => {
      const m = createWeaponModel(w, this.getSkin('gun'))
      m.visible = false
      ent.avatar.weaponAnchor.add(m)
      return m
    })
    if (ent.meleeModel) ent.avatar.meleeAnchor.remove(ent.meleeModel)
    ent.meleeModel = createMeleeModel(this.getSkin('melee'))
    ent.meleeModel.visible = false
    ent.avatar.meleeAnchor.add(ent.meleeModel)
    if (ent.grenadeModel) ent.avatar.grenadeAnchor.remove(ent.grenadeModel)
    ent.grenadeModel = createGrenadeModel(this.getSkin('grenade'))
    ent.grenadeModel.visible = false
    ent.avatar.grenadeAnchor.add(ent.grenadeModel)
    if (ent.weaponModels[ent.weaponIndex]) ent.weaponModels[ent.weaponIndex].visible = true
    ent.weaponModel = ent.weaponModels[ent.weaponIndex]
  }

  /* ---------------- entity factories ---------------- */
  makePlayer() {
    const skin = this.getSkin('avatar')
    const avatar = createBlockAvatar(skin, { name: 'YOU', nameColor: '#ffd447', showHp: false, owner: 'player' })
    avatar.group.position.set(0, 0, -28)
    this.arena.scene.add(avatar.group)
    const p = {
      id: this.net.id, name: 'YOU', isLocal: true,
      pos: new THREE.Vector3(0, 0, -28), vel: new THREE.Vector3(),
      yaw: 0, pitch: 0, grounded: true,
      health: 100, alive: true, respawnTimer: 0, deaths: 0, kills: 0, streak: 0, highestStreak: 0,
      weaponIndex: 0, ammo: WEAPONS.map(w => w.mag), reserve: WEAPONS.map(w => w.reserve),
      fireCooldown: 0, reloadTimer: 0, reloadWeapon: -1, aiming: false, sprinting: false,
      damageFlash: 0, flashTimer: 0, meleeTimer: 0, meleeCooldown: 0,
      avatar, lastFootstep: 0,
    }
    this.rebuildModels(p)
    return p
  }

  makeBots() {
    const bots = []
    for (let i = 0; i < 8; i++) {
      const skin = AVATAR_SKINS[(i + 2) % AVATAR_SKINS.length]
      const avatar = createBlockAvatar(skin, {
        name: BOT_NAMES[i], nameColor: i % 3 === 0 ? '#ff8a3d' : '#ff6b7a', owner: `bot${i}`,
      })
      const sp = this.arena.spawns[i % this.arena.spawns.length]
      avatar.group.position.copy(sp)
      this.arena.scene.add(avatar.group)
      const weapon = createWeaponModel(WEAPONS[i % 3], GUN_SKINS[i % GUN_SKINS.length])
      weapon.position.set(0.3, 1.16, 0.42)
      avatar.weaponAnchor.add(weapon)
      const bot = {
        id: `bot${i}`, name: BOT_NAMES[i], isBot: true, skin,
        pos: sp.clone(), vel: new THREE.Vector3(), yaw: 0, pitch: 0, grounded: true,
        health: 100, alive: true, respawnTimer: 0, kills: 0, deaths: 0, streak: 0,
        target: null, thinkTimer: rand(0, 0.5), waypoint: null, wpTimer: 0,
        fireCooldown: rand(0, 1), strafe: Math.random() < 0.5 ? 1 : -1,
        avatar, weaponModel: weapon, flashTimer: 0, speed: rand(5.2, 7.2),
        accuracy: rand(0.72, 0.93),
      }
      bots.push(bot)
    }
    return bots
  }

  /* ---------------- input & lifecycle ---------------- */
  bindEvents() {
    window.addEventListener('resize', () => this.onResize())
    document.addEventListener('keydown', (e) => this.onKeyDown(e))
    document.addEventListener('keyup', (e) => this.onKeyUp(e))
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === this.canvas) this.onMouseMove(e.movementX, e.movementY)
    })
    document.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouseDown = false; if (e.button === 2) this.mouseAim = false })
    this.canvas.addEventListener('mousedown', (e) => {
      if (this.state !== 'playing') return
      if (document.pointerLockElement !== this.canvas && !this.isTouch) this.canvas.requestPointerLock?.()
      if (e.button === 0) this.mouseDown = true
      if (e.button === 2) this.mouseAim = true
    })
    this.canvas.addEventListener('contextmenu', e => e.preventDefault())
    this.canvas.addEventListener('wheel', (e) => {
      if (this.state !== 'playing') return
      e.preventDefault()
      this.switchWeapon(this.player.weaponIndex + (e.deltaY > 0 ? 1 : -1))
    }, { passive: false })
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== this.canvas && this.state === 'playing' && !this.suppressPause && !this.isTouch) this.pause()
    })
    // Drag the 3D lobby camera with the mouse.
    let dragging = false, lx = 0
    this.canvas.addEventListener('pointerdown', e => { if (this.state === 'menu') { dragging = true; lx = e.clientX } })
    window.addEventListener('pointerup', () => { dragging = false })
    window.addEventListener('pointermove', e => {
      if (dragging && this.state === 'menu') { this.lobby.rotate(e.clientX - lx); lx = e.clientX }
    })
  }

  onResize() {
    const w = window.innerWidth, h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.lobby.camera.aspect = w / h
    this.lobby.camera.updateProjectionMatrix()
  }

  onMouseMove(dx, dy) {
    if (this.state !== 'playing') return
    this.player.yaw += dx * 0.0022
    this.player.pitch = clamp(this.player.pitch - dy * 0.0022, -1.45, 1.45)
  }

  onKeyDown(e) {
    const k = e.key.toLowerCase()
    this.keys[k] = true
    if (k === 'tab') {
      e.preventDefault()
      if (this.state === 'playing') this.ui.el.scoreboard.classList.remove('hidden')
    }
    if (e.key === 'Escape') {
      if (!this.ui.el.customize.classList.contains('hidden')) { this.ui.closeCustomize(); return }
      if (!this.ui.el.how.classList.contains('hidden')) { this.ui.el.how.classList.add('hidden'); return }
      if (this.state === 'playing') this.pause()
      else if (this.state === 'paused') this.resume()
      return
    }
    if (this.state !== 'playing') return
    if (k === ' ') { e.preventDefault(); this.jump() }
    if (k === 'r') this.reload()
    if (k === 'v') this.melee()
    if (k === 'g') this.throwGrenade()
    if (k === 'b') this.openCustomizeInGame()
    if (['1', '2', '3', '4'].includes(k)) this.switchWeapon(parseInt(k, 10) - 1)
  }
  onKeyUp(e) {
    const k = e.key.toLowerCase()
    this.keys[k] = false
    if (k === 'tab') this.ui.el.scoreboard.classList.add('hidden')
  }

  openCustomizeInGame() {
    this.suppressPause = true
    document.exitPointerLock?.()
    this.ui.openCustomize('avatar')
  }

  startMatch() {
    this.sfx.init()
    this.sfx.click()
    this.matchTime = MATCH_DURATION
    this.matchDuration = MATCH_DURATION
    this.killSeen.clear()
    this.projectiles.forEach(p => this.arena.scene.remove(p.mesh))
    this.projectiles = []
    const resetEntity = (e, idx) => {
      const sp = this.arena.spawns[idx % this.arena.spawns.length]
      e.pos.copy(sp); e.vel.set(0, 0, 0)
      e.health = 100; e.alive = true; e.respawnTimer = 0; e.invuln = 2.5
      e.kills = 0; e.deaths = 0; e.streak = 0
      e.avatar.setDead(false)
      if (e.isLocal) {
        e.ammo = WEAPONS.map(w => w.mag)
        e.reserve = WEAPONS.map(w => w.reserve)
        e.reloadTimer = 0
        e.weaponIndex = 0
        e.yaw = Math.atan2(-sp.x, -sp.z)
        e.pitch = 0
      }
    }
    resetEntity(this.player, 4)
    this.bots.forEach((b, i) => resetEntity(b, i))
    this.ui.el.customize.classList.add('hidden')
    this.ui.el.how.classList.add('hidden')
    this.ui.show('hud')
    this.ui.el.touch.classList.toggle('hidden', !this.isTouch)
    this.state = 'playing'
    this.suppressPause = false
    this.last = performance.now()
    if (!this.isTouch) this.canvas.requestPointerLock?.()
  }

  pause() {
    if (this.state !== 'playing') return
    this.state = 'paused'
    this.ui.show('pause')
    this.ui.el.touch.classList.add('hidden')
    document.exitPointerLock?.()
    this.mouseDown = false; this.mouseAim = false
  }
  resume() {
    if (this.state !== 'paused') return
    this.ui.show('hud')
    this.ui.el.touch.classList.toggle('hidden', !this.isTouch)
    this.state = 'playing'
    this.last = performance.now()
    if (!this.isTouch) this.canvas.requestPointerLock?.()
  }
  quitToMenu() {
    this.state = 'menu'
    this.ui.show('menu')
    this.ui.el.touch.classList.add('hidden')
    this.ui.el.customize.classList.add('hidden')
    this.ui.refreshLoadout()
    this.ui.setOnline(this.net.peerCount + 8)
    document.exitPointerLock?.()
  }
  endMatch() {
    if (this.state !== 'playing') return
    this.state = 'end'
    const rows = this.scoreboardEntries()
    const won = this.player.kills >= KILL_TARGET || (rows[0]?.me && rows[0].kills >= this.player.kills)
    if (won) { this.stats.wins++; this.coins += 200; this.save() }
    this.ui.showEnd(rows, won)
    this.ui.el.touch.classList.add('hidden')
    document.exitPointerLock?.()
    this.sfx.kill()
  }

  /* ---------------- movement ---------------- */
  collideAt(x, y, z, radius = 0.42, height = 1.75) {
    tmpVec.set(x, y, z)
    return this.arena.collide(tmpVec, radius, height)
  }

  moveEntity(e, dt, wx, wz, speed) {
    const len = Math.hypot(wx, wz)
    if (len > 0) { wx /= len; wz /= len }
    const targetVX = wx * speed, targetVZ = wz * speed
    const accel = 1 - Math.exp(-dt * (len > 0 ? 14 : 10))
    e.vel.x += (targetVX - e.vel.x) * accel
    e.vel.z += (targetVZ - e.vel.z) * accel
    e.vel.y -= 24 * dt
    if (e.vel.y < -32) e.vel.y = -32

    const nx = e.pos.x + e.vel.x * dt
    if (!this.collideAt(nx, e.pos.y, e.pos.z)) e.pos.x = nx
    else if (e.grounded && !this.collideAt(nx, e.pos.y + 0.66, e.pos.z) && !this.collideAt(e.pos.x, e.pos.y + 0.66, e.pos.z)) {
      e.pos.y += 0.66; e.pos.x = nx
    } else e.vel.x = 0
    const nz = e.pos.z + e.vel.z * dt
    if (!this.collideAt(e.pos.x, e.pos.y, nz)) e.pos.z = nz
    else if (e.grounded && !this.collideAt(e.pos.x, e.pos.y + 0.66, nz) && !this.collideAt(e.pos.x, e.pos.y + 0.66, e.pos.z)) {
      e.pos.y += 0.66; e.pos.z = nz
    } else e.vel.z = 0
    const ny = e.pos.y + e.vel.y * dt
    if (this.collideAt(e.pos.x, ny, e.pos.z)) {
      if (e.vel.y < 0) e.grounded = true
      e.vel.y = 0
    } else {
      e.pos.y = ny
      if (e.pos.y <= 0) { e.pos.y = 0; e.grounded = true; if (e.vel.y < -4) e.landed = true; e.vel.y = 0 }
      else e.grounded = false
    }
    this.arena.clamp(e.pos)
  }

  jump() {
    const p = this.player
    if (!p.alive || !p.grounded) return
    p.vel.y = 9.2
    p.grounded = false
    this.sfx.jump()
  }

  /* ---------------- weapons ---------------- */
  switchWeapon(idx) {
    const p = this.player
    idx = (idx + WEAPONS.length) % WEAPONS.length
    if (idx === p.weaponIndex || p.reloadTimer > 0) return
    if (p.weaponModels[p.weaponIndex]) p.weaponModels[p.weaponIndex].visible = false
    p.weaponIndex = idx
    if (p.weaponModels[idx]) p.weaponModels[idx].visible = true
    p.weaponModel = p.weaponModels[idx]
    p.fireCooldown = Math.max(p.fireCooldown, 0.18)
    p.aiming = false
    this.sfx.click()
    this.ui.updateWeaponSlots()
  }
  reload() {
    const p = this.player
    const w = WEAPONS[p.weaponIndex]
    if (!p.alive || p.reloadTimer > 0 || p.ammo[p.weaponIndex] >= w.mag || p.reserve[p.weaponIndex] <= 0) return
    p.reloadTimer = w.reload
    p.reloadWeapon = p.weaponIndex
    this.sfx.reload()
  }

  melee() {
    const p = this.player
    if (!p.alive || p.meleeCooldown > 0) return
    p.meleeTimer = 0.32
    p.meleeCooldown = 0.62
    p.meleeModel.visible = true
    this.sfx.swing()
    const dir = this.aimDirection()
    for (const t of [...this.bots, ...this.remotes.values()]) {
      if (!t.alive) continue
      const to = tmpVec.copy(t.pos).sub(p.pos).setY(0)
      const d = to.length()
      if (d > 2.8) continue
      to.normalize()
      if (to.dot(dir.setY(0).normalize()) > 0.45) {
        this.dealDamage(t, 42, p, false, 'MELEE', 'melee')
      }
    }
  }

  throwGrenade() {
    const p = this.player
    if (!p.alive || (p.grenadeCooldown || 0) > 0) return
    p.grenadeCooldown = 1.4
    p.grenadeModel.visible = false
    const dir = this.aimDirection()
    const mesh = createGrenadeModel(this.getSkin('grenade'))
    mesh.scale.setScalar(1.1)
    const pos = p.pos.clone().add(new THREE.Vector3(0, 1.4, 0)).addScaledVector(dir, 0.7)
    mesh.position.copy(pos)
    this.arena.scene.add(mesh)
    this.projectiles.push({
      mesh, pos, vel: dir.clone().multiplyScalar(19).add(new THREE.Vector3(0, 7, 0)),
      fuse: 2.1, owner: p,
    })
    this.sfx.swing()
  }

  aimDirection() {
    const p = this.player
    return new THREE.Vector3(
      Math.sin(p.yaw) * Math.cos(p.pitch),
      Math.sin(p.pitch),
      Math.cos(p.yaw) * Math.cos(p.pitch),
    ).normalize()
  }

  shoot() {
    const p = this.player
    const w = WEAPONS[p.weaponIndex]
    if (!p.alive || p.reloadTimer > 0 || p.fireCooldown > 0) return
    if (p.ammo[p.weaponIndex] <= 0) { this.reload(); return }
    p.ammo[p.weaponIndex]--
    p.fireCooldown = w.rate

    const model = p.weaponModel
    const muzzle = model.userData.muzzle.clone()
    model.updateWorldMatrix(true, false)
    model.localToWorld(muzzle)
    const camDir = new THREE.Vector3()
    this.camera.getWorldDirection(camDir)
    const camPos = this.camera.position.clone()
    const targets = []
    for (const b of this.bots) if (b.alive) targets.push(...b.avatar.hitMeshes)
    for (const r of this.remotes.values()) if (r.alive && r.avatar) targets.push(...r.avatar.hitMeshes)
    targets.push(...this.arena.solidMeshes)
    raycaster.far = w.range

    let endPoint = camPos.clone().addScaledVector(camDir, w.range)
    let hitAny = false
    let headAny = false
    for (let i = 0; i < w.pellets; i++) {
      const spread = p.aiming ? w.adsSpread : w.spread
      const dir = camDir.clone()
      dir.x += rand(-spread, spread)
      dir.y += rand(-spread, spread)
      dir.z += rand(-spread, spread)
      dir.normalize()
      raycaster.set(camPos, dir)
      const hits = raycaster.intersectObjects(targets, false)
      const hit = hits[0]
      if (!hit) { this.effects.tracer(muzzle, endPoint, this.getSkin('gun').glow, 0.035, 0.07); continue }
      endPoint = hit.point.clone()
      const ud = hit.object.userData || {}
      if (ud.owner) {
        const victim = this.findEntity(ud.owner)
        if (victim) {
          const head = ud.hitZone === 'head'
          const dist = hit.distance
          const falloff = clamp(1 - Math.max(0, dist - w.range * 0.55) / (w.range * 0.6), 0.45, 1)
          const dmg = Math.round(w.damage * (head ? w.headMult : 1) * falloff)
          this.dealDamage(victim, dmg, p, head, w.name, 'gun')
          this.effects.blood(hit.point)
          this.effects.damageNumber(hit.point, dmg, head)
          hitAny = true; headAny = headAny || head
        }
      } else {
        this.effects.impact(hit.point, 0xffd447, 5)
      }
      this.effects.tracer(muzzle, hit.point, this.getSkin('gun').glow, 0.035, 0.07)
    }
    model.userData.flash.visible = true
    p.flashTimer = 0.05
    p.pitch = clamp(p.pitch + w.recoil * (p.aiming ? 0.55 : 1) * rand(0.8, 1.2), -1.45, 1.45)
    p.yaw += rand(-w.recoil, w.recoil) * 0.3
    this.sfx.shoot(w.id)
    if (hitAny || headAny) {
      this.ui.showHit(headAny)
      this.sfx[headAny ? 'headshot' : 'hit']()
    }
    this.ui.updateHud(this)
  }

  findEntity(id) {
    if (id === this.player.id || id === 'player') return this.player
    const bot = this.bots.find(b => b.id === id)
    if (bot) return bot
    return this.remotes.get(id)
  }

  /* ---------------- damage & kills ---------------- */
  dealDamage(target, amount, source, head, weapon, kind = 'gun') {
    if (!target || !target.alive || amount <= 0 || (target.invuln || 0) > 0) return
    const wasAlive = target.alive
    target.health -= amount
    if (target.isLocal) {
      target.damageFlash = 1
      this.sfx.hurt()
      if (!this.net.host && source && source !== target && source.id !== this.player.id) {
        // host already knows through its own bots; local view still flashes.
      }
    }
    if (target.isBot) {
      target.avatar.setHealth(target.health)
      if (this.net.host) this.net.send('botHp', { id: target.id, hp: target.health })
      else if (source === this.player && kind === 'gun') {
        this.net.send('botHit', { target: target.id, amount, head, shooter: this.player.id, weapon })
      }
    }
    if (target && !target.isLocal && !target.isBot && source === this.player) {
      // Remote human: their own tab owns their health bar.
      this.net.send('playerDamage', { target: target.id, from: 'YOU', amount, head, weapon })
    }
    if (target.health <= 0 && wasAlive) {
      this.registerKill(target, source, weapon, head)
    }
  }

  registerKill(victim, killer, weapon, head) {
    victim.health = 0
    victim.alive = false
    victim.deaths = (victim.deaths || 0) + 1
    victim.respawnTimer = victim.isLocal ? 3 : rand(2.5, 4)
    victim.avatar.setDead(true)
    victim.vel.set(0, 0, 0)
    const killerName = killer?.name || 'The Arena'
    if (killer && killer !== victim) {
      killer.kills = (killer.kills || 0) + 1
      killer.streak = (killer.streak || 0) + 1
      killer.highestStreak = Math.max(killer.highestStreak || 0, killer.streak)
      if (killer.isLocal) {
        const coins = 40 + (head ? 20 : 0) + Math.min(40, killer.streak * 5)
        this.coins += coins
        this.stats.kills++
        this.stats.best = Math.max(this.stats.best, killer.streak)
        this.save()
        this.ui.showKillBanner(head ? 'HEADSHOT!' : killerName, coins)
        this.sfx.kill()
        this.ui.toast(`+${coins} coins · ${killer.streak} kill streak`)
      }
    }
    this.ui.addKill(killerName, victim.name || 'Player', weapon, head)
    if (victim.isBot && this.net.host) {
      this.net.send('botHp', { id: victim.id, hp: 0 })
      this.net.send('kill', { killer: killerName, victim: victim.name, weapon, head })
    }
    if (victim.isLocal) this.sfx.hurt()
    if (killer?.isLocal && this.player.kills >= KILL_TARGET) this.endMatch()
  }

  respawn(e, idx) {
    const sp = this.arena.spawns[Math.floor(rand(0, this.arena.spawns.length - 1))]
    e.pos.copy(sp)
    e.pos.y = sp.y || 0
    e.vel.set(0, 0, 0)
    e.health = 100
    e.alive = true
    e.streak = 0
    e.invuln = 2.5
    e.avatar.setDead(false)
    e.avatar.setHealth(100)
    if (e.isLocal) {
      e.ammo = WEAPONS.map(w => w.mag)
      e.reloadTimer = 0
      e.damageFlash = 0
      e.yaw = Math.atan2(-sp.x, -sp.z)
      this.ui.el.respawnTip.textContent = RESPAWN_TIPS[Math.floor(rand(0, RESPAWN_TIPS.length))]
    }
    if (e.isBot && this.net.host) this.net.send('botHp', { id: e.id, hp: 100 })
  }

  /* ---------------- net handlers ---------------- */
  onPeerState(id, s) {
    if (!s || !Array.isArray(s.p)) return
    let r = this.remotes.get(id)
    if (!r) {
      const skin = AVATAR_SKINS.find(a => a.id === s.skin) || AVATAR_SKINS[0]
      const avatar = createBlockAvatar(skin, { name: s.name || 'PLAYER', nameColor: '#4aa8ff', owner: id })
      this.arena.scene.add(avatar.group)
      r = { id, name: s.name || 'PLAYER', avatar, pos: new THREE.Vector3(...s.p), alive: true, health: 100, kills: 0, deaths: 0, streak: 0, yaw: 0, weaponIndex: s.weapon || 0 }
      this.remotes.set(id, r)
      this.ui.toast(`${r.name} joined the arena!`)
      if (this.player.weaponModels[s.weapon || 0]) {
        const m = createWeaponModel(WEAPONS[s.weapon || 0], GUN_SKINS[0])
        m.position.set(0.3, 1.16, 0.42)
        avatar.weaponAnchor.add(m)
      }
    }
    r.targetPos = new THREE.Vector3(...s.p)
    r.yaw = s.yaw || 0
    r.alive = s.alive !== false
    r.health = s.hp ?? r.health
    r.avatar.setDead(!r.alive)
    r.avatar.setHealth(r.health)
    this.ui.setOnline(this.net.peerCount + 8)
  }
  onPeerLeave(id) {
    const r = this.remotes.get(id)
    if (r) { this.arena.scene.remove(r.avatar.group); this.remotes.delete(id) }
    this.ui.setOnline(this.net.peerCount + 8)
  }
  onRemoteBotHit(d) {
    if (!this.net.host) return
    const bot = this.bots.find(b => b.id === d.target)
    if (!bot || !bot.alive) return
    const source = d.shooter === this.player.id ? this.player : this.remotes.get(d.shooter) || { name: 'PLAYER', id: d.shooter }
    this.dealDamage(bot, d.amount, source, d.head, d.weapon || 'GUN', 'net')
  }
  onBotHp(d) {
    const bot = this.bots.find(b => b.id === d.id)
    if (!bot) return
    bot.health = d.hp
    bot.avatar.setHealth(d.hp)
    if (d.hp <= 0 && bot.alive) {
      bot.alive = false
      bot.deaths++
      bot.respawnTimer = rand(2.5, 4)
      bot.avatar.setDead(true)
    }
  }
  onPlayerDamage(d) {
    if (d.target !== this.player.id || !this.player.alive) return
    const source = this.bots.find(b => b.name === d.from) || this.remotes.get(d.from)
    this.dealDamage(this.player, d.amount, source || { name: d.from || 'PLAYER' }, d.head, d.weapon || 'GUN', 'net')
  }
  onRemoteKill(d) {
    const key = `${d.killer}|${d.victim}|${Math.round(this.time)}`
    if (this.killSeen.has(key)) return
    this.killSeen.add(key)
    this.ui.addKill(d.killer, d.victim, d.weapon, d.head)
  }

  /* ---------------- bots ---------------- */
  updateBots(dt) {
    for (const b of this.bots) {
      if (!b.alive) {
        b.respawnTimer -= dt
        if (b.respawnTimer <= 0) this.respawn(b)
        continue
      }
      b.fireCooldown -= dt
      b.thinkTimer -= dt
      b.wpTimer -= dt
      b.invuln = Math.max(0, (b.invuln || 0) - dt)
      b.flashTimer = Math.max(0, b.flashTimer - dt)
      b.weaponModel.userData.flash.visible = b.flashTimer > 0

      // select target
      if (b.thinkTimer <= 0) {
        b.thinkTimer = rand(0.35, 0.7)
        const candidates = [this.player, ...this.remotes.values(), ...this.bots]
        let best = null, bestD = 42
        for (const c of candidates) {
          if (c === b || !c.alive || (c.isBot && !this.net.host)) continue
          const d = b.pos.distanceTo(c.pos)
          if (d < bestD && this.hasLineOfSight(b.pos, c.pos)) { best = c; bestD = d }
        }
        b.target = best
        if (!b.waypoint || b.wpTimer <= 0 || b.pos.distanceTo(b.waypoint) < 2.5) {
          b.waypoint = this.arena.waypoints[Math.floor(rand(0, this.arena.waypoints.length))].clone()
          b.wpTimer = rand(5, 10)
        }
      }

      let wx = 0, wz = 0, speed = b.speed
      if (b.target) {
        const to = tmpVec.copy(b.target.pos).sub(b.pos)
        const dist = to.length()
        const desiredYaw = Math.atan2(to.x, to.z)
        b.yaw = this.angleLerp(b.yaw, desiredYaw, 1 - Math.exp(-dt * 7))
        const dy = (b.target.pos.y + 1.3) - (b.pos.y + 1.5)
        b.pitch = this.angleLerp(b.pitch, Math.atan2(dy, Math.max(1, dist)), 1 - Math.exp(-dt * 6))
        const fwd = tmpVec2.set(Math.sin(b.yaw), 0, Math.cos(b.yaw))
        if (dist > 17) { wx = fwd.x; wz = fwd.z }
        else if (dist < 9) { wx = -fwd.x; wz = -fwd.z }
        else {
          wx = fwd.z * b.strafe; wz = -fwd.x * b.strafe
          if (Math.random() < dt * 0.4) b.strafe *= -1
        }
        if (dist < 38 && b.fireCooldown <= 0 && this.hasLineOfSight(b.pos, b.target.pos)) {
          this.botShoot(b, b.target, dist)
          b.fireCooldown = rand(0.16, 0.42)
        }
      } else if (b.waypoint) {
        const to = tmpVec.copy(b.waypoint).sub(b.pos)
        const desiredYaw = Math.atan2(to.x, to.z)
        b.yaw = this.angleLerp(b.yaw, desiredYaw, 1 - Math.exp(-dt * 4))
        wx = Math.sin(b.yaw); wz = Math.cos(b.yaw)
        speed *= 0.75
      }
      this.moveEntity(b, dt, wx, wz, speed)
      b.avatar.group.position.copy(b.pos)
      b.avatar.group.rotation.y = b.yaw
      b.avatar.head.rotation.x = -b.pitch * 0.6
      b.avatar.animate(dt, Math.hypot(b.vel.x, b.vel.z), !b.grounded, false)

      // health pickup
      if (b.health < 70) {
        for (const pk of this.arena.pickups) {
          if (pk.active && b.pos.distanceTo(pk.pos) < 3.5) {
            this.arena.takePickup(b.pos)
            b.health = Math.min(100, b.health + 40)
            b.avatar.setHealth(b.health)
            this.effects.impact(pk.pos, 0x5ce1b9, 5)
          }
        }
      }
    }
  }

  angleLerp(a, b, t) {
    let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI
    if (d < -Math.PI) d += Math.PI * 2
    return a + d * t
  }

  hasLineOfSight(from, to) {
    const a = from.clone().add(new THREE.Vector3(0, 1.5, 0))
    const b = to.clone().add(new THREE.Vector3(0, 1.3, 0))
    const dir = b.clone().sub(a)
    const dist = dir.length()
    raycaster.set(a, dir.normalize())
    raycaster.far = dist - 0.6
    const hits = raycaster.intersectObjects(this.arena.solidMeshes, false)
    raycaster.far = 300
    return hits.length === 0
  }

  botShoot(bot, target, dist) {
    const from = bot.pos.clone().add(new THREE.Vector3(0, 1.5, 0))
    const aim = target.pos.clone().add(new THREE.Vector3(0, 1.3, 0))
    const dir = aim.sub(from).normalize()
    const spread = (1 - bot.accuracy) * 1.8 + dist * 0.002
    dir.x += rand(-spread, spread); dir.y += rand(-spread, spread); dir.z += rand(-spread, spread)
    dir.normalize()
    raycaster.set(from, dir)
    raycaster.far = 60
    const targets = []
    if (target.isLocal || (target !== this.player && this.net.host)) {
      // Only the host decides damage for remote humans; local player takes its own.
      if (target.isLocal) targets.push(...this.player.avatar.hitMeshes)
    } else if (target.isBot && this.net.host) targets.push(...target.avatar.hitMeshes)
    if (targets.length === 0) targets.push(...this.arena.solidMeshes)
    const hits = raycaster.intersectObjects(targets.concat(this.arena.solidMeshes), false)
    const hit = hits[0]
    const end = hit ? hit.point : from.clone().addScaledVector(dir, 60)
    bot.weaponModel.updateWorldMatrix(true, false)
    const muzzle = bot.weaponModel.localToWorld(bot.weaponModel.userData.muzzle.clone())
    this.effects.tracer(muzzle, end, 0xff8a3d, 0.04, 0.08)
    bot.flashTimer = 0.05
    if (hit?.object.userData?.owner) {
      const dmg = Math.round(rand(8, 13))
      const head = hit.object.userData.hitZone === 'head'
      if (target.isLocal) {
        this.dealDamage(this.player, dmg, bot, head, 'ENEMY GUN', 'bot')
      } else if (this.net.host && target.id && target !== this.player) {
        this.net.send('playerDamage', { target: target.id, from: bot.name, amount: dmg, head, weapon: 'ENEMY GUN' })
      } else if (target.isBot && this.net.host) {
        this.dealDamage(target, dmg, bot, head, 'ENEMY GUN', 'bot')
      }
    }
    raycaster.far = 300
  }

  /* ---------------- projectiles ---------------- */
  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const g = this.projectiles[i]
      g.fuse -= dt
      g.vel.y -= 20 * dt
      const next = g.pos.clone().addScaledVector(g.vel, dt)
      const blocked = this.collideAt(next.x, next.y, next.z, 0.15, 0.2) || next.y <= 0.12
      if (blocked) {
        g.vel.multiplyScalar(0.35)
        g.vel.y = Math.abs(g.vel.y) * 0.4
      } else g.pos.copy(next)
      g.mesh.position.copy(g.pos)
      g.mesh.rotation.x += dt * 12
      if (g.fuse <= 0) {
        this.effects.explosion(g.pos, 4.5)
        this.sfx.shoot('shotgun')
        for (const t of [this.player, ...this.bots, ...this.remotes.values()]) {
          if (!t.alive) continue
          const d = t.pos.distanceTo(g.pos)
          if (d < 5.2) {
            const dmg = Math.round(95 * (1 - d / 6))
            if (t.isLocal || t.isBot && this.net.host) this.dealDamage(t, dmg, g.owner, false, 'GRENADE', 'explosion')
            else if (t.id && t.isBot === undefined) this.net.send('playerDamage', { target: t.id, from: g.owner.name, amount: dmg, head: false, weapon: 'GRENADE' })
          }
        }
        this.arena.scene.remove(g.mesh)
        this.projectiles.splice(i, 1)
      }
    }
  }

  /* ---------------- camera & update ---------------- */
  updateCamera(dt) {
    const p = this.player
    const dir = this.aimDirection()
    const target = new THREE.Vector3(p.pos.x, p.pos.y + 1.5, p.pos.z)
    const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw))
    const dist = p.aiming ? 2.9 : 5.0
    const side = p.aiming ? 0.5 : 0.95
    const height = p.aiming ? 0.3 : 0.85
    const desired = target.clone().addScaledVector(dir, -dist).addScaledVector(right, side).add(new THREE.Vector3(0, height, 0))
    // pull camera in when a wall is behind the player
    const camDir = desired.clone().sub(target)
    const camLen = camDir.length()
    camDir.normalize()
    for (let i = 1; i <= 10; i++) {
      const test = target.clone().addScaledVector(camDir, camLen * i / 10)
      if (this.collideAt(test.x, test.y, test.z, 0.2, 0.2)) {
        desired.copy(target).addScaledVector(camDir, Math.max(0.6, camLen * (i - 1) / 10 - 0.2))
        break
      }
    }
    this.camera.position.lerp(desired, 1 - Math.exp(-dt * 18))
    const look = target.clone().addScaledVector(dir, p.aiming ? 40 : 12)
    this.camera.lookAt(look)
    const speed = Math.hypot(p.vel.x, p.vel.z)
    const baseFov = 72 - (p.aiming ? 72 * (1 - WEAPONS[p.weaponIndex].adsZoom) : 0)
    const targetFov = baseFov + Math.min(5, speed * 0.5)
    this.camera.fov += (targetFov - this.camera.fov) * (1 - Math.exp(-dt * 10))
    this.camera.updateProjectionMatrix()
  }

  update(dt) {
    this.matchTime -= dt
    if (this.matchTime <= 0 || this.player.kills >= KILL_TARGET) { this.endMatch(); return }
    const p = this.player
    p.fireCooldown = Math.max(0, p.fireCooldown - dt)
    p.meleeCooldown = Math.max(0, p.meleeCooldown - dt)
    p.grenadeCooldown = Math.max(0, (p.grenadeCooldown || 0) - dt)
    p.damageFlash = Math.max(0, p.damageFlash - dt * 1.8)
    p.invuln = Math.max(0, (p.invuln || 0) - dt)
    p.flashTimer = Math.max(0, p.flashTimer - dt)
    if (p.weaponModel) p.weaponModel.userData.flash.visible = p.flashTimer > 0
    p.meleeTimer = Math.max(0, p.meleeTimer - dt)
    if (p.meleeModel) {
      p.meleeModel.visible = p.meleeTimer > 0
      p.meleeModel.rotation.z = -0.5 + Math.sin((1 - p.meleeTimer / 0.32) * Math.PI) * 1.8
    }
    if (p.grenadeCooldown > 1.0 && p.grenadeModel) p.grenadeModel.visible = true

    if (!p.alive) {
      p.respawnTimer -= dt
      if (p.respawnTimer <= 0) this.respawn(p)
    } else {
      // Movement input
      const f = (this.keys['w'] ? 1 : 0) - (this.keys['s'] ? 1 : 0) + (-this.touchMove.y)
      const s = (this.keys['d'] ? 1 : 0) - (this.keys['a'] ? 1 : 0) + this.touchMove.x
      p.aiming = !!(this.mouseAim || this.touchAim)
      p.sprinting = !!(this.keys['shift'] && f > 0 && !p.aiming)
      const speed = p.aiming ? 4.6 : p.sprinting ? 11.2 : 7.4
      const wx = Math.sin(p.yaw) * f + Math.cos(p.yaw) * s
      const wz = Math.cos(p.yaw) * f - Math.sin(p.yaw) * s
      this.moveEntity(p, dt, wx, wz, speed)
      if (p.grounded && p.landed) { this.sfx.land(); p.landed = false }
      p.avatar.group.position.copy(p.pos)
      p.avatar.group.rotation.y = p.yaw
      p.avatar.head.rotation.x = -p.pitch * 0.5
      p.avatar.animate(dt, Math.hypot(p.vel.x, p.vel.z), !p.grounded, p.aiming)

      // Reload completion
      if (p.reloadTimer > 0) {
        p.reloadTimer -= dt
        if (p.reloadTimer <= 0) {
          const w = WEAPONS[p.reloadWeapon]
          const need = w.mag - p.ammo[p.reloadWeapon]
          const take = Math.min(need, p.reserve[p.reloadWeapon])
          p.ammo[p.reloadWeapon] += take
          p.reserve[p.reloadWeapon] -= take
          p.reloadTimer = 0
        }
      }
      const wantFire = this.mouseDown || this.touchFire
      const w = WEAPONS[p.weaponIndex]
      if (wantFire && (w.auto || !this.waitingFireRelease)) {
        this.shoot()
        if (!w.auto) this.waitingFireRelease = true
      }
      if (!wantFire) this.waitingFireRelease = false

      if (this.arena.takePickup(p.pos)) {
        p.health = Math.min(100, p.health + 35)
        p.avatar.setHealth(p.health)
        this.sfx.pickup()
        this.ui.showPickup('+35 HEALTH')
      }
    }

    this.updateBots(dt)
    this.updateProjectiles(dt)
    this.updateCamera(dt)
    this.arena.update(dt, this.time)
    this.effects.update(dt)
    this.net.update()
    this.net.broadcastPlayerState({
      p: [p.pos.x, p.pos.y, p.pos.z], yaw: p.yaw, hp: Math.round(p.health),
      alive: p.alive, skin: this.equipped.avatar, weapon: p.weaponIndex, name: 'PLAYER' + this.net.id.slice(0, 3),
    })
    this.ui.updateHud(this)
  }

  scoreboardEntries() {
    const all = [
      { name: 'YOU', me: true, kills: this.player.kills, deaths: this.player.deaths, streak: this.player.streak },
      ...this.bots.map(b => ({ name: b.name, kills: b.kills, deaths: b.deaths, streak: b.streak })),
      ...[...this.remotes.values()].map(r => ({ name: r.name, kills: r.kills, deaths: r.deaths, streak: r.streak })),
    ]
    return all.sort((a, b) => b.kills - a.kills || a.deaths - b.deaths)
  }

  loop(now) {
    const dt = Math.min(0.05, (now - this.last) / 1000)
    this.last = now
    this.time += dt
    if (this.time - (this.lastOnlineUpdate || 0) > 0.8) {
      this.lastOnlineUpdate = this.time
      this.net.send('ping', { playing: this.state === 'playing' })
      if (this.state === 'menu') this.ui.setOnline(this.net.peerCount + 8)
    }
    if (this.state === 'menu') {
      this.lobby.update(dt, this.time)
      this.renderer.render(this.lobby.scene, this.lobby.camera)
    } else {
      if (this.state === 'playing') this.update(dt)
      this.renderer.render(this.arena.scene, this.camera)
    }
    this.ui.updatePreview(dt, this.time)
    requestAnimationFrame((t) => this.loop(t))
  }
}

// Boot
window.addEventListener('DOMContentLoaded', () => {
  window.blockstrike = new Game()
})
