import * as THREE from 'three'

const matCache = new Map()
export function mat(color, opts = {}) {
  const key = `${color}-${opts.emissive || 0}-${opts.transparent || false}-${opts.opacity || 1}-${opts.flat || false}`
  if (matCache.has(key)) return matCache.get(key)
  const m = new THREE.MeshLambertMaterial({
    color,
    emissive: opts.emissive || 0x000000,
    emissiveIntensity: opts.emissive ? (opts.emissiveIntensity || 0.8) : 0,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    flatShading: !!opts.flat,
  })
  matCache.set(key, m)
  return m
}

const geoCache = new Map()
function box(w, h, d) {
  const key = `${w}|${h}|${d}`
  if (!geoCache.has(key)) geoCache.set(key, new THREE.BoxGeometry(w, h, d))
  return geoCache.get(key)
}
export function boxMesh(w, h, d, color, opts) {
  const m = new THREE.Mesh(box(w, h, d), mat(color, opts))
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function makeNameTexture(name, hp, color, showHp) {
  const c = document.createElement('canvas')
  c.width = 256; c.height = 72
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 256, 72)
  ctx.font = '900 26px Nunito, Trebuchet MS, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineWidth = 7
  ctx.strokeStyle = 'rgba(4,9,18,0.92)'
  ctx.strokeText(name, 128, 24)
  ctx.fillStyle = color
  ctx.fillText(name, 128, 24)
  if (showHp) {
    ctx.fillStyle = 'rgba(0,0,0,0.7)'
    ctx.fillRect(58, 46, 140, 12)
    ctx.fillStyle = hp > 55 ? '#5ce1b9' : hp > 25 ? '#ffd447' : '#ff5364'
    ctx.fillRect(60, 48, Math.max(0, 136 * Math.max(0, hp) / 100), 8)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function createNameTag(name, color, showHp = true) {
  const tex = makeNameTexture(name, 100, color, showHp)
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }))
  sprite.scale.set(2.3, 0.65, 1)
  sprite.position.set(0, 2.45, 0)
  sprite.renderOrder = 20
  sprite.userData.update = (hp) => {
    const old = sprite.material.map
    sprite.material.map = makeNameTexture(name, hp, color, showHp)
    sprite.material.needsUpdate = true
    old?.dispose()
  }
  return sprite
}

function addHat(head, skin) {
  const hc = skin.hatColor
  const g = new THREE.Group()
  switch (skin.hat) {
    case 'cap': {
      const crown = boxMesh(0.62, 0.16, 0.6, hc); crown.position.y = 0.32; g.add(crown)
      const brim = boxMesh(0.6, 0.06, 0.24, hc); brim.position.set(0, 0.28, 0.38); g.add(brim)
      break
    }
    case 'headband': {
      const band = boxMesh(0.63, 0.1, 0.63, hc); band.position.y = 0.14; g.add(band)
      const tail = boxMesh(0.08, 0.28, 0.1, hc); tail.position.set(-0.32, 0.02, -0.3); g.add(tail)
      break
    }
    case 'helmet': {
      const top = boxMesh(0.66, 0.2, 0.66, hc); top.position.y = 0.32; g.add(top)
      const side1 = boxMesh(0.08, 0.26, 0.5, hc); side1.position.set(-0.32, 0.15, 0); g.add(side1)
      const side2 = side1.clone(); side2.position.x = 0.32; g.add(side2)
      break
    }
    case 'visor': {
      const band = boxMesh(0.66, 0.12, 0.66, 0x1d2740); band.position.y = 0.26; g.add(band)
      const glass = boxMesh(0.64, 0.16, 0.08, hc, { emissive: hc, emissiveIntensity: 0.45 }); glass.position.set(0, 0.23, 0.31); g.add(glass)
      break
    }
    case 'beanie': {
      const beanie = boxMesh(0.64, 0.22, 0.64, hc); beanie.position.y = 0.34; g.add(beanie)
      const pom = boxMesh(0.16, 0.16, 0.16, 0xffffff); pom.position.y = 0.49; g.add(pom)
      break
    }
    case 'crown': {
      const base = boxMesh(0.56, 0.13, 0.56, hc); base.position.y = 0.33; g.add(base)
      for (let i = -1; i <= 1; i++) {
        const spike = boxMesh(0.12, 0.18, 0.12, hc); spike.position.set(i * 0.19, 0.48, 0); g.add(spike)
      }
      break
    }
    case 'horns': {
      const l = boxMesh(0.12, 0.34, 0.12, hc); l.position.set(-0.26, 0.42, 0); l.rotation.z = 0.4; g.add(l)
      const r = boxMesh(0.12, 0.34, 0.12, hc); r.position.set(0.26, 0.42, 0); r.rotation.z = -0.4; g.add(r)
      break
    }
    case 'cat': {
      const l = boxMesh(0.17, 0.24, 0.12, hc); l.position.set(-0.2, 0.42, 0); l.rotation.z = 0.2; g.add(l)
      const r = boxMesh(0.17, 0.24, 0.12, hc); r.position.set(0.2, 0.42, 0); r.rotation.z = -0.2; g.add(r)
      break
    }
    default: break
  }
  head.add(g)
  return g
}

/**
 * Creates a blocky Roblox-style avatar.
 * Returns { group, hitMeshes, animate, setHealth, setSkin, weaponAnchor, meleeAnchor, grenadeAnchor, head, body }
 */
export function createBlockAvatar(skin, options = {}) {
  const group = new THREE.Group()
  const hitMeshes = []
  const nameColor = options.nameColor || '#ffffff'
  const scale = options.scale || 1

  const body = new THREE.Group()
  body.scale.setScalar(scale)
  group.add(body)

  const torso = boxMesh(0.66, 0.68, 0.36, skin.torso)
  torso.position.y = 1.08
  body.add(torso)
  torso.userData = { hitZone: 'body', owner: options.owner }
  hitMeshes.push(torso)

  const head = new THREE.Group()
  head.position.y = 1.72
  body.add(head)
  const headMesh = boxMesh(0.58, 0.56, 0.56, skin.head)
  head.add(headMesh)
  headMesh.userData = { hitZone: 'head', owner: options.owner }
  hitMeshes.push(headMesh)

  // blocky face on +Z side
  const eyeWhite = mat(0xffffff)
  const eyeDark = mat(0x1a1a22)
  for (const x of [-0.14, 0.14]) {
    const eye = new THREE.Mesh(box(0.13, 0.15, 0.02), eyeWhite)
    eye.position.set(x, 0.04, 0.29); head.add(eye)
    const pupil = new THREE.Mesh(box(0.06, 0.08, 0.025), eyeDark)
    pupil.position.set(x, 0.03, 0.31); head.add(pupil)
  }
  const mouth = new THREE.Mesh(box(0.2, 0.035, 0.02), eyeDark)
  mouth.position.set(0, -0.16, 0.29); head.add(mouth)
  addHat(head, skin)

  const arms = []
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group()
    pivot.position.set(side * 0.46, 1.36, 0)
    body.add(pivot)
    const arm = boxMesh(0.24, 0.62, 0.26, side < 0 ? skin.arms : skin.torso)
    arm.position.y = -0.31
    pivot.add(arm)
    arm.userData = { hitZone: 'body', owner: options.owner }
    hitMeshes.push(arm)
    const hand = boxMesh(0.25, 0.14, 0.26, skin.head)
    hand.position.y = -0.66
    pivot.add(hand)
    arms.push(pivot)
  }

  const legs = []
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group()
    pivot.position.set(side * 0.17, 0.74, 0)
    body.add(pivot)
    const leg = boxMesh(0.27, 0.66, 0.28, skin.legs)
    leg.position.y = -0.33
    pivot.add(leg)
    leg.userData = { hitZone: 'body', owner: options.owner }
    hitMeshes.push(leg)
    const shoe = boxMesh(0.3, 0.12, 0.36, 0x2a2f3a)
    shoe.position.set(0, -0.68, 0.04)
    pivot.add(shoe)
    legs.push(pivot)
  }

  const weaponAnchor = new THREE.Group()
  weaponAnchor.position.set(0.3, 1.16, 0.42)
  body.add(weaponAnchor)
  const meleeAnchor = new THREE.Group()
  meleeAnchor.position.set(-0.38, 1.02, 0.38)
  body.add(meleeAnchor)
  const grenadeAnchor = new THREE.Group()
  grenadeAnchor.position.set(0.42, 0.92, 0.2)
  body.add(grenadeAnchor)

  let tag = null
  if (options.name) {
    tag = createNameTag(options.name, nameColor, options.showHp !== false)
    group.add(tag)
  }

  let phase = Math.random() * 6
  const api = {
    group, body, head, hitMeshes, weaponAnchor, meleeAnchor, grenadeAnchor, tag,
    setHealth(hp) { tag?.userData.update(Math.max(0, Math.round(hp))) },
    animate(dt, speed = 0, airborne = false, aiming = false) {
      phase += dt * (4 + speed * 1.5)
      const walk = Math.min(1, speed / 5)
      const swing = Math.sin(phase) * 0.72 * walk
      if (airborne) {
        arms[0].rotation.x = -1.5; arms[1].rotation.x = -1.5
        legs[0].rotation.x = 0.4; legs[1].rotation.x = -0.4
      } else {
        arms[0].rotation.x = aiming ? -1.25 : swing
        arms[1].rotation.x = aiming ? -1.05 : -swing
        arms[0].rotation.z = aiming ? -0.2 : 0.04
        arms[1].rotation.z = aiming ? 0.22 : -0.04
        legs[0].rotation.x = -swing
        legs[1].rotation.x = swing
      }
      body.position.y = airborne ? 0 : Math.abs(Math.sin(phase)) * 0.045 * walk
      head.rotation.z = Math.sin(phase * 0.5) * 0.03 * walk
    },
    setDead(dead) {
      body.rotation.x = dead ? -1.35 : 0
      body.position.y = dead ? -0.55 : 0
      if (tag) tag.visible = !dead
    },
    setSkin(newSkin) {
      torso.material = mat(newSkin.torso)
      headMesh.material = mat(newSkin.head)
      arms[0].children[0].material = mat(newSkin.arms)
      arms[1].children[0].material = mat(newSkin.torso)
      legs[0].children[0].material = mat(newSkin.legs)
      legs[1].children[0].material = mat(newSkin.legs)
      const oldHat = head.children.find(c => c.userData.isHat)
      if (oldHat) head.remove(oldHat)
      const hat = addHat(head, newSkin)
      hat.userData.isHat = true
    },
  }
  const firstHat = head.children[head.children.length - 1]
  if (firstHat) firstHat.userData.isHat = true
  return api
}

/** Build a chunky block gun. Forward direction is local +Z. */
export function createWeaponModel(weapon, skin) {
  const g = new THREE.Group()
  const bodyMat = mat(skin.body)
  const accentMat = mat(skin.accent)
  const glowMat = mat(skin.glow, { emissive: skin.glow, emissiveIntensity: 0.55 })
  let length = 1.1

  const receiver = boxMesh(0.2, 0.22, 0.62, skin.body); g.add(receiver)
  const top = boxMesh(0.16, 0.08, 0.5, skin.accent); top.position.y = 0.15; g.add(top)
  const grip = boxMesh(0.13, 0.3, 0.16, skin.accent); grip.position.set(0, -0.24, -0.1); grip.rotation.x = 0.25; g.add(grip)
  const mag = boxMesh(0.14, 0.34, 0.2, skin.accent); mag.position.set(0, -0.26, 0.16); mag.rotation.x = -0.14; g.add(mag)

  if (weapon.id === 'sniper') {
    const barrel = boxMesh(0.1, 0.1, 0.95, skin.accent); barrel.position.set(0, 0.06, 0.72); g.add(barrel)
    const scope = boxMesh(0.13, 0.13, 0.42, skin.body); scope.position.set(0, 0.28, 0.12); g.add(scope)
    const lens = boxMesh(0.11, 0.11, 0.04, skin.glow, { emissive: skin.glow, emissiveIntensity: 0.7 }); lens.position.set(0, 0.28, 0.35); g.add(lens)
    length = 1.2
  } else if (weapon.id === 'shotgun') {
    const barrel = boxMesh(0.16, 0.16, 0.72, skin.accent); barrel.position.set(0, 0.04, 0.62); g.add(barrel)
    const pump = boxMesh(0.19, 0.13, 0.3, skin.body); pump.position.set(0, -0.07, 0.5); g.add(pump)
    length = 0.98
  } else if (weapon.id === 'smg') {
    const barrel = boxMesh(0.1, 0.1, 0.4, skin.accent); barrel.position.set(0, 0.03, 0.5); g.add(barrel)
    const sight = boxMesh(0.06, 0.1, 0.06, skin.glow, { emissive: skin.glow, emissiveIntensity: 0.8 }); sight.position.set(0, 0.23, 0.28); g.add(sight)
    length = 0.72
  } else {
    const barrel = boxMesh(0.1, 0.1, 0.62, skin.accent); barrel.position.set(0, 0.03, 0.6); g.add(barrel)
    const sight = boxMesh(0.05, 0.09, 0.05, skin.glow, { emissive: skin.glow, emissiveIntensity: 0.8 }); sight.position.set(0, 0.23, 0.32); g.add(sight)
    length = 0.92
  }

  const muzzle = boxMesh(0.12, 0.12, 0.1, skin.body); muzzle.position.set(0, 0.03, length); g.add(muzzle)
  const flash = boxMesh(0.26, 0.26, 0.34, 0xfff2a0, { emissive: 0xffc93c, emissiveIntensity: 1 })
  flash.position.set(0, 0.03, length + 0.2); flash.visible = false; g.add(flash)

  g.userData = {
    muzzle: new THREE.Vector3(0, 0.03, length + 0.08),
    flash,
    bodyMat, accentMat, glowMat,
    applySkin(s) {
      receiver.material = mat(s.body)
      top.material = mat(s.accent)
      grip.material = mat(s.accent)
      mag.material = mat(s.accent)
      muzzle.material = mat(s.body)
      glowMat.color.set(s.glow); glowMat.emissive.set(s.glow)
      g.traverse(o => {
        if (o.isMesh && o.material === mat(skin.body)) o.material = mat(s.body)
      })
      g.userData.skin = s
    },
    skin,
  }
  g.scale.setScalar(1.05)
  return g
}

export function createMeleeModel(skin) {
  const g = new THREE.Group()
  const handle = boxMesh(0.09, 0.34, 0.09, skin.accent); handle.position.y = -0.1; g.add(handle)
  const blade = boxMesh(0.12, 0.85, 0.11, skin.body); blade.position.y = 0.48; g.add(blade)
  const tip = boxMesh(0.13, 0.14, 0.12, skin.glow, { emissive: skin.glow, emissiveIntensity: 0.4 }); tip.position.y = 0.95; g.add(tip)
  g.rotation.z = -0.5
  return g
}

export function createGrenadeModel(skin) {
  const g = new THREE.Group()
  const core = boxMesh(0.22, 0.22, 0.22, skin.body); g.add(core)
  const band = boxMesh(0.24, 0.06, 0.24, skin.accent); band.position.y = 0.02; g.add(band)
  const pin = boxMesh(0.05, 0.05, 0.13, skin.glow, { emissive: skin.glow, emissiveIntensity: 0.5 }); pin.position.set(0.06, 0.14, 0); g.add(pin)
  return g
}

export function makeCubeTexture(color1, color2, size = 256) {
  const c = document.createElement('canvas'); c.width = c.height = size
  const ctx = c.getContext('2d')
  ctx.fillStyle = `#${new THREE.Color(color1).getHexString()}`
  ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = `#${new THREE.Color(color2).getHexString()}`
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 === 0) ctx.fillRect(x * size / 8, y * size / 8, size / 8, size / 8)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.magFilter = THREE.NearestFilter
  return tex
}
