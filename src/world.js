import * as THREE from 'three'
import { boxMesh, mat, createBlockAvatar, createWeaponModel, makeCubeTexture } from './avatar.js'
import { ARENA_HALF, AVATAR_SKINS, GUN_SKINS, WEAPONS } from './data.js'

function textPlane(text, color = '#ffffff', width = 6, height = 1.2, sub = '') {
  const c = document.createElement('canvas')
  c.width = 1024; c.height = 200
  const ctx = c.getContext('2d')
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.font = '900 108px Nunito, Trebuchet MS, sans-serif'
  ctx.lineWidth = 16; ctx.strokeStyle = '#070d17'
  ctx.strokeText(text, 512, sub ? 78 : 100)
  ctx.fillStyle = color
  ctx.fillText(text, 512, sub ? 78 : 100)
  if (sub) {
    ctx.font = '900 40px Nunito, Trebuchet MS, sans-serif'
    ctx.lineWidth = 9
    ctx.strokeText(sub, 512, 158)
    ctx.fillStyle = '#9fb0cb'
    ctx.fillText(sub, 512, 158)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide }))
  return plane
}

function skyDome(scene, top = 0x4a9fe8, bottom = 0xc8e9ff) {
  const geo = new THREE.SphereGeometry(300, 24, 16)
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { topColor: { value: new THREE.Color(top) }, bottomColor: { value: new THREE.Color(bottom) } },
    vertexShader: 'varying vec3 vWorld; void main(){ vWorld = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vWorld; void main(){ float h = normalize(vWorld).y * 0.5 + 0.5; gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.28,0.78,h)),1.0); }',
  })
  const dome = new THREE.Mesh(geo, material)
  scene.add(dome)
  return dome
}

function addCloud(group, x, y, z, s = 1) {
  const cloud = new THREE.Group()
  const c = 0xf4fbff
  const parts = [[0, 0, 0, 3.4, 1.2, 1.8], [-2, -0.2, 0, 2.2, 0.9, 1.5], [2, -0.1, 0, 2.4, 1, 1.5], [0.6, 0.7, 0, 2, 0.9, 1.4]]
  for (const [px, py, pz, w, h, d] of parts) {
    const b = boxMesh(w, h, d, c); b.position.set(px, py, pz); b.castShadow = false; cloud.add(b)
  }
  cloud.position.set(x, y, z); cloud.scale.setScalar(s)
  group.add(cloud)
  return cloud
}

/** Build the combat arena. */
export function createArena() {
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0xa9d8f5, 55, 155)
  skyDome(scene)
  scene.add(new THREE.HemisphereLight(0xdff1ff, 0x4a6a4a, 1.5))
  const sun = new THREE.DirectionalLight(0xfff4d6, 2.0)
  sun.position.set(28, 46, 18)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -55; sun.shadow.camera.right = 55
  sun.shadow.camera.top = 55; sun.shadow.camera.bottom = -55
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 130
  sun.shadow.bias = -0.0006
  scene.add(sun)
  scene.add(new THREE.AmbientLight(0xffffff, 0.35))

  const colliders = []
  const solidMeshes = []
  const world = new THREE.Group()
  scene.add(world)

  function addBox(x, y, z, w, h, d, color, opts = {}) {
    const m = boxMesh(w, h, d, color, opts.material || {})
    m.position.set(x, y, z)
    if (opts.rotY) m.rotation.y = opts.rotY
    if (opts.map) m.material = mat(0xffffff, {}) ; // map handled separately below
    world.add(m)
    if (opts.solid) {
      const hw = w / 2, hd = d / 2
      let minX = x - hw, maxX = x + hw, minZ = z - hd, maxZ = z + hd
      if (opts.rotY) {
        const c = Math.abs(Math.cos(opts.rotY)), s = Math.abs(Math.sin(opts.rotY))
        const ew = hw * c + hd * s, ed = hw * s + hd * c
        minX = x - ew; maxX = x + ew; minZ = z - ed; maxZ = z + ed
      }
      colliders.push(new THREE.Box3(new THREE.Vector3(minX, y - h / 2, minZ), new THREE.Vector3(maxX, y + h / 2, maxZ)))
      solidMeshes.push(m)
    }
    return m
  }

  // Ground with big block checker.
  const groundTex = makeCubeTexture(0x6fc477, 0x62b56b, 256)
  groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping
  groundTex.repeat.set(9, 9)
  const ground = new THREE.Mesh(new THREE.BoxGeometry(84, 1, 84), new THREE.MeshLambertMaterial({ map: groundTex }))
  ground.position.y = -0.5
  ground.receiveShadow = true
  world.add(ground)
  solidMeshes.push(ground)

  // Concrete paths and plaza.
  addBox(0, 0.03, 0, 16, 0.08, 16, 0x9aa9b5)
  addBox(0, 0.02, 24, 9, 0.06, 30, 0x8e9da9)
  addBox(0, 0.02, -24, 9, 0.06, 30, 0x8e9da9)
  addBox(24, 0.02, 0, 30, 0.06, 9, 0x8e9da9)
  addBox(-24, 0.02, 0, 30, 0.06, 9, 0x8e9da9)

  // Perimeter walls with colored bands.
  const wallColors = [0xff8a3d, 0x4aa8ff, 0x5ce1b9, 0xffd447]
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2
    const x = Math.sin(a) * (ARENA_HALF + 1)
    const z = Math.cos(a) * (ARENA_HALF + 1)
    const w = i % 2 === 0 ? (ARENA_HALF * 2 + 6) : 2
    const d = i % 2 === 0 ? 2 : (ARENA_HALF * 2 + 6)
    addBox(x, 2.5, z, w, 5, d, 0x3b4d66, { solid: true })
    addBox(x * 0.97, 4.7, z * 0.97, w * 0.99, 0.5, d * 0.99, wallColors[i])
  }

  // Central platform with stair approaches.
  addBox(0, 0.75, 0, 11, 1.5, 11, 0x6f7f92, { solid: true })
  addBox(0, 1.55, 0, 11.4, 0.14, 11.4, 0x8fa1b3)
  for (const dir of [1, -1]) {
    for (let i = 0; i < 3; i++) {
      addBox(0, 0.25 + i * 0.5, dir * (7 + i * 1.1), 7, 0.5 + i * 0.5, 1.1, 0x7b8b9c, { solid: true })
      addBox(dir * (7 + i * 1.1), 0.25 + i * 0.5, 0, 1.1, 0.5 + i * 0.5, 7, 0x7b8b9c, { solid: true })
    }
  }
  // Center beacon
  addBox(0, 2.1, 0, 1.2, 1.2, 1.2, 0xffd447, { material: { emissive: 0xffb020, emissiveIntensity: 0.6 } })

  // Raised side towers.
  const towers = [[-24, -18], [24, 18], [24, -18], [-24, 18]]
  towers.forEach(([tx, tz], idx) => {
    addBox(tx, 3, tz, 9, 6, 9, 0x697a8d, { solid: true })
    addBox(tx, 6.1, tz, 9.6, 0.3, 9.6, idx % 2 ? 0x4aa8ff : 0xff8a3d)
    // stair blocks toward center
    const sx = Math.sign(-tx), sz = Math.sign(-tz)
    for (let i = 0; i < 4; i++) {
      addBox(tx + sx * (5.5 + i * 1.05), 0.75 + i * 0.75, tz, 1.1, 1.5 + i * 1.5, 3.4, 0x7b8b9c, { solid: true })
    }
    addBox(tx + sx * 2.6, 6.9, tz, 0.3, 1.4, 8.6, 0xdfe8f2)
    addBox(tx, 6.9, tz + sz * 2.6, 8.6, 1.4, 0.3, 0xdfe8f2)
  })

  // Shipping containers.
  const containers = [
    [-12, 12, 0xff6b57, 0], [12, -12, 0x4aa8ff, 0], [-30, 4, 0xffc93c, Math.PI / 2],
    [30, -4, 0x5ce1b9, Math.PI / 2], [4, 30, 0xff77b0, 0], [-4, -30, 0x9b7cff, 0],
  ]
  containers.forEach(([x, z, c, r]) => {
    addBox(x, 1.6, z, 8, 3.2, 3, c, { solid: true, rotY: r })
    addBox(x, 1.6, z + (r ? 0 : 1.55), 7.6, 0.12, 0.08, 0xffffff)
  })

  // Crates and cover walls.
  const crates = [
    [-8, -10], [8, 10], [-16, 8], [16, -8], [-20, 24], [20, -24], [-30, -22],
    [30, 22], [12, 22], [-12, -22], [0, 16], [0, -16], [-33, 14], [33, -14],
    [18, 4], [-18, -4], [6, -27], [-6, 27],
  ]
  crates.forEach(([x, z], i) => {
    const s = i % 3 === 0 ? 2.6 : 2.1
    addBox(x, s / 2, z, s, s, s, i % 2 ? 0xc79254 : 0xb57e42, { solid: true })
    addBox(x, s - 0.06, z, s + 0.06, 0.1, s + 0.06, 0x8c5f30)
    if (i % 4 === 0) addBox(x + 0.3, s + 0.9, z - 0.2, 1.6, 1.8, 1.6, 0x9d6d39, { solid: true })
  })
  const covers = [[-20, 0, 1], [20, 0, 1], [0, -20, 0], [0, 20, 0], [-10, 28, 0], [10, -28, 0]]
  covers.forEach(([x, z, rot]) => addBox(x, 1.1, z, rot ? 1.4 : 7, 2.2, rot ? 7 : 1.4, 0x8797a8, { solid: true }))

  // Trees around edges.
  const treeSpots = []
  for (let i = -3; i <= 3; i++) {
    treeSpots.push([i * 11, -35], [i * 11, 35], [-35, i * 11], [35, i * 11])
  }
  treeSpots.forEach(([x, z], i) => {
    if (Math.abs(x) < 6 && Math.abs(z) > 30) return
    addBox(x, 1.5, z, 0.8, 3, 0.8, 0x7b5a3a, { solid: true })
    const leaf = [0x3ea85c, 0x4fbe6b, 0x2f9a52][i % 3]
    addBox(x, 3.9, z, 3.4, 2.4, 3.4, leaf)
    addBox(x, 5.5, z, 2.3, 1.6, 2.3, leaf)
  })

  // Spawn pads.
  const spawns = [
    new THREE.Vector3(-30, 0, -30), new THREE.Vector3(30, 0, 30),
    new THREE.Vector3(30, 0, -30), new THREE.Vector3(-30, 0, 30),
    new THREE.Vector3(0, 0, 32), new THREE.Vector3(0, 1.6, 0),
  ]
  spawns.forEach((p, i) => {
    const c = [0xff6b57, 0x4aa8ff, 0xffd447, 0x5ce1b9, 0xff77b0, 0xffffff][i]
    addBox(p.x, 0.05, p.z, 4, 0.1, 4, c, { material: { emissive: c, emissiveIntensity: 0.45 } })
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.1, 6, 4), mat(c, { emissive: c, emissiveIntensity: 0.6 }))
    ring.rotation.x = Math.PI / 2; ring.rotation.z = Math.PI / 4
    ring.position.set(p.x, 0.16, p.z)
    world.add(ring)
  })

  // Health pickups.
  const pickups = []
  const pickupSpots = [[-16, 16], [16, -16], [-27, -10], [27, 10], [0, -30]]
  pickupSpots.forEach(([x, z]) => {
    const g = new THREE.Group()
    const core = boxMesh(0.8, 0.8, 0.8, 0x5ce1b9, { emissive: 0x2fae86, emissiveIntensity: 0.7 })
    g.add(core)
    const cross1 = boxMesh(0.55, 0.18, 0.85, 0xffffff); g.add(cross1)
    const cross2 = boxMesh(0.18, 0.55, 0.85, 0xffffff); g.add(cross2)
    const glow = new THREE.PointLight(0x5ce1b9, 1.2, 6)
    g.add(glow)
    g.position.set(x, 1.2, z)
    world.add(g)
    pickups.push({ pos: new THREE.Vector3(x, 1.2, z), mesh: g, active: true, timer: 0 })
  })

  // Clouds and sky sign.
  const clouds = []
  for (let i = 0; i < 10; i++) {
    clouds.push(addCloud(world, (Math.random() - 0.5) * 160, 32 + Math.random() * 16, (Math.random() - 0.5) * 160, 1 + Math.random()))
  }
  const sign = textPlane('BLOCKSTRIKE', '#ffd447', 22, 4.4, 'FREE-FOR-ALL ARENA')
  sign.position.set(0, 15, -36)
  world.add(sign)

  const sunBall = new THREE.Mesh(new THREE.SphereGeometry(6, 12, 8), mat(0xfff3c4, { emissive: 0xffe9a0, emissiveIntensity: 0.9 }))
  sunBall.position.set(75, 70, -90)
  scene.add(sunBall)

  const waypoints = [
    ...spawns.map(s => s.clone()),
    ...crates.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    ...covers.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 0, 10), new THREE.Vector3(0, 0, -10),
    new THREE.Vector3(-10, 0, 0), new THREE.Vector3(10, 0, 0),
  ]

  return {
    scene, world, colliders, solidMeshes, spawns, waypoints, pickups, clouds, sun,
    update(dt, t) {
      for (const p of pickups) {
        if (p.active) {
          p.mesh.rotation.y += dt * 1.6
          p.mesh.position.y = p.pos.y + Math.sin(t * 2.4 + p.pos.x) * 0.16
        } else {
          p.timer -= dt
          if (p.timer <= 0) {
            p.active = true
            p.mesh.visible = true
          }
        }
      }
      clouds.forEach((c, i) => {
        c.position.x += dt * (0.4 + i * 0.05)
        if (c.position.x > 95) c.position.x = -95
      })
      sign.lookAt(0, 8, 40)
    },
    collide(pos, radius, height) {
      for (const b of colliders) {
        if (pos.x + radius > b.min.x && pos.x - radius < b.max.x &&
            pos.z + radius > b.min.z && pos.z - radius < b.max.z &&
            pos.y + height > b.min.y && pos.y < b.max.y) return true
      }
      return false
    },
    clamp(pos) {
      pos.x = THREE.MathUtils.clamp(pos.x, -ARENA_HALF, ARENA_HALF)
      pos.z = THREE.MathUtils.clamp(pos.z, -ARENA_HALF, ARENA_HALF)
    },
    takePickup(pos) {
      for (const p of pickups) {
        if (p.active && pos.distanceTo(p.pos) < 1.5) {
          p.active = false
          p.mesh.visible = false
          p.timer = 12
          return true
        }
      }
      return false
    },
  }
}

/** A live 3D lobby with NPCs and skin display pedestals. */
export function createLobby() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1d4268)
  scene.fog = new THREE.Fog(0x1d4268, 40, 100)
  scene.add(new THREE.HemisphereLight(0xe8f6ff, 0x3b5680, 2.2))
  const key = new THREE.DirectionalLight(0xffe6b8, 2.6)
  key.position.set(12, 22, 14); key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.left = -25; key.shadow.camera.right = 25
  key.shadow.camera.top = 25; key.shadow.camera.bottom = -25
  scene.add(key)
  const fill = new THREE.PointLight(0x4aa8ff, 60, 35)
  fill.position.set(-10, 8, -6); scene.add(fill)
  const fill2 = new THREE.PointLight(0xffd447, 50, 35)
  fill2.position.set(10, 8, 6); scene.add(fill2)

  const group = new THREE.Group(); scene.add(group)
  const floorTex = makeCubeTexture(0x35547a, 0x2a4467, 256)
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping
  floorTex.repeat.set(7, 7)
  const floor = new THREE.Mesh(new THREE.BoxGeometry(36, 1, 36), new THREE.MeshLambertMaterial({ map: floorTex }))
  floor.position.y = -0.5; floor.receiveShadow = true; group.add(floor)

  // border rails and corner pillars
  for (const s of [-1, 1]) {
    const rail1 = boxMesh(36, 0.5, 0.6, 0x3b5175); rail1.position.set(0, 0.4, s * 17.8); group.add(rail1)
    const rail2 = boxMesh(0.6, 0.5, 36, 0x3b5175); rail2.position.set(s * 17.8, 0.4, 0); group.add(rail2)
  }
  for (const [x, z, c] of [[-16, -16, 0xff8a3d], [16, -16, 0x4aa8ff], [-16, 16, 0x5ce1b9], [16, 16, 0xffd447]]) {
    const p = boxMesh(1.2, 6, 1.2, c); p.position.set(x, 3, z); group.add(p)
    const l = boxMesh(1.5, 0.4, 1.5, c, { emissive: c, emissiveIntensity: 0.6 }); l.position.set(x, 6.2, z); group.add(l)
  }

  // central spawn pad
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 0.2, 8), mat(0x2b4a6b, { emissive: 0x1d7fa8, emissiveIntensity: 0.35 }))
  pad.position.y = 0.1; group.add(pad)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.14, 6, 8), mat(0x5ce1b9, { emissive: 0x5ce1b9, emissiveIntensity: 0.7 }))
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.25; group.add(ring)

  // NPC avatars wandering the lobby
  const npcs = []
  for (let i = 0; i < 8; i++) {
    const skin = AVATAR_SKINS[(i + 1) % AVATAR_SKINS.length]
    const names = ['BlockyBoi', 'TinyTitan', 'CubeQueen', 'PixelPunch', 'NoobMaster', 'SquareJoe', 'RespawnKing', 'BrickBoss']
    const avatar = createBlockAvatar(skin, { name: names[i], nameColor: i % 2 ? '#5ce1b9' : '#ffd447', showHp: false, scale: 0.92 })
    avatar.group.position.set(Math.cos(i / 8 * Math.PI * 2) * 8, 0, Math.sin(i / 8 * Math.PI * 2) * 8)
    group.add(avatar.group)
    npcs.push({
      avatar,
      angle: i / 8 * Math.PI * 2,
      radius: 7 + (i % 3) * 1.3,
      speed: 0.22 + (i % 4) * 0.06,
      bob: Math.random() * 6,
    })
  }

  // Gun skin display pedestals
  const pedestals = []
  const pedestalDefs = [
    { x: -8, z: -6, skin: GUN_SKINS[3], weapon: WEAPONS[0], label: 'SUNSET POP' },
    { x: 8, z: -6, skin: GUN_SKINS[6], weapon: WEAPONS[3], label: 'GOLDEN BOY' },
    { x: -8, z: 6, skin: GUN_SKINS[5], weapon: WEAPONS[2], label: 'FROSTBITE' },
    { x: 8, z: 6, skin: GUN_SKINS[7], weapon: WEAPONS[1], label: 'GALAXY GYRO' },
  ]
  pedestalDefs.forEach((d, i) => {
    const base = boxMesh(1.8, 1.4, 1.8, 0x324967); base.position.set(d.x, 0.7, d.z); group.add(base)
    const top = boxMesh(2, 0.18, 2, d.skin.body); top.position.set(d.x, 1.48, d.z); group.add(top)
    const glow = new THREE.PointLight(d.skin.glow, 4, 5); glow.position.set(d.x, 2.3, d.z); group.add(glow)
    const model = createWeaponModel(d.weapon, d.skin)
    model.position.set(d.x, 2.1, d.z); model.scale.setScalar(1.7); group.add(model)
    let label = null
    if (d.z < 0) {
      label = textPlane(d.label, '#ffffff', 1.8, 0.36, d.skin.rarity + ' SKIN')
      label.position.set(d.x, 3.4, d.z); group.add(label)
    }
    pedestals.push({ model, label, baseY: 2.1 })
  })

  // Big lobby banner
  const banner = textPlane('BLOCKSTRIKE', '#ffd447', 8.5, 1.7, 'LOBBY · 9 PLAYERS ONLINE')
  banner.position.set(2, 9.2, -14)
  group.add(banner)

  // floating decorative blocks
  const floaters = []
  for (let i = 0; i < 18; i++) {
    const c = [0xffd447, 0x5ce1b9, 0x4aa8ff, 0xff8a3d][i % 4]
    const b = boxMesh(0.35, 0.35, 0.35, c, { emissive: c, emissiveIntensity: 0.25 })
    b.position.set((Math.random() - 0.5) * 30, 2 + Math.random() * 8, (Math.random() - 0.5) * 30)
    group.add(b); floaters.push({ mesh: b, y: b.position.y, phase: Math.random() * 6 })
  }

  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 200)
  let orbit = 0.55

  return {
    scene, camera, group,
    rotate(dx) { orbit += dx * 0.004 },
    update(dt, t) {
      orbit += dt * 0.055
      const r = 17
      camera.position.set(Math.sin(orbit) * r, 7.5 + Math.sin(t * 0.35) * 0.5, Math.cos(orbit) * r)
      camera.lookAt(0, 2.4, 0)
      npcs.forEach((n, i) => {
        n.angle += dt * n.speed
        n.avatar.group.position.x = Math.cos(n.angle) * n.radius
        n.avatar.group.position.z = Math.sin(n.angle) * n.radius
        n.avatar.group.rotation.y = -n.angle + Math.PI / 2
        n.avatar.animate(dt, 2.1, false, false)
        n.avatar.group.position.y = Math.abs(Math.sin(t * 5 + n.bob)) * 0.06
        if (i % 3 === 0) n.avatar.body.rotation.z = Math.sin(t * 3 + n.bob) * 0.1
      })
      pedestals.forEach((p, i) => {
        p.model.rotation.y = t * 0.5 + i
        p.model.position.y = p.baseY + Math.sin(t * 1.6 + i) * 0.12
      })
      ring.rotation.z += dt * 0.6
      floaters.forEach(f => {
        f.mesh.position.y = f.y + Math.sin(t * 1.2 + f.phase) * 0.4
        f.mesh.rotation.x += dt; f.mesh.rotation.y += dt * 0.7
      })
      banner.lookAt(camera.position)
      pedestals.forEach(p => p.label?.lookAt(camera.position))
    },
  }
}
