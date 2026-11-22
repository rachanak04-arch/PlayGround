import * as THREE from 'three'
import { boxMesh, mat } from './avatar.js'

export class Effects {
  constructor(scene) {
    this.scene = scene
    this.items = []
    this.geo = new THREE.BoxGeometry(1, 1, 1)
  }

  tracer(from, to, color = 0xffd447, width = 0.05, life = 0.09) {
    const dir = new THREE.Vector3().subVectors(to, from)
    const len = dir.length()
    if (len < 0.01) return
    const mesh = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false }))
    mesh.position.copy(from).addScaledVector(dir, 0.5)
    mesh.scale.set(width, width, len)
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir.clone().normalize())
    this.scene.add(mesh)
    this.items.push({ mesh, life, max: life, kind: 'fade' })
  }

  impact(point, color = 0xffd447, count = 7) {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, depthWrite: false }))
      const s = 0.06 + Math.random() * 0.09
      mesh.scale.setScalar(s)
      mesh.position.copy(point)
      this.scene.add(mesh)
      const v = new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 5, (Math.random() - 0.5) * 6)
      this.items.push({ mesh, life: 0.5 + Math.random() * 0.3, max: 0.8, kind: 'particle', v })
    }
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.08, 0.16, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }))
    ring.position.copy(point); ring.lookAt(point.clone().add(new THREE.Vector3(0, 1, 0)))
    this.scene.add(ring)
    this.items.push({ mesh: ring, life: 0.25, max: 0.25, kind: 'fade' })
  }

  blood(point) {
    this.impact(point, 0xff5c6b, 5)
  }

  explosion(point, radius = 4) {
    const ball = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffb03d, transparent: true, opacity: 0.9, depthWrite: false }))
    ball.position.copy(point); ball.scale.setScalar(0.3)
    this.scene.add(ball)
    this.items.push({ mesh: ball, life: 0.45, max: 0.45, kind: 'explode', radius })
    for (let i = 0; i < 22; i++) {
      const mesh = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffd447 : 0xff6b3d, transparent: true, opacity: 1, depthWrite: false }))
      mesh.scale.setScalar(0.12 + Math.random() * 0.15)
      mesh.position.copy(point)
      this.scene.add(mesh)
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.9, Math.random() - 0.5).normalize().multiplyScalar(9 + Math.random() * 9)
      this.items.push({ mesh, life: 0.6 + Math.random() * 0.4, max: 1, kind: 'particle', v })
    }
  }

  damageNumber(point, amount, head = false) {
    const c = document.createElement('canvas'); c.width = 128; c.height = 64
    const ctx = c.getContext('2d')
    ctx.font = '900 40px Nunito, Trebuchet MS, sans-serif'
    ctx.textAlign = 'center'
    ctx.lineWidth = 8; ctx.strokeStyle = '#000'
    ctx.strokeText(String(amount), 64, 44)
    ctx.fillStyle = head ? '#ffd447' : '#ffffff'
    ctx.fillText(String(amount), 64, 44)
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }))
    sp.scale.set(1.3, 0.65, 1); sp.position.copy(point); sp.renderOrder = 25
    this.scene.add(sp)
    this.items.push({ mesh: sp, life: 0.75, max: 0.75, kind: 'float', v: new THREE.Vector3((Math.random() - 0.5) * 0.5, 1.6, 0) })
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i]
      it.life -= dt
      const t = Math.max(0, it.life / it.max)
      if (it.kind === 'particle') {
        it.v.y -= 15 * dt
        it.mesh.position.addScaledVector(it.v, dt)
        if (it.mesh.position.y < 0.05) { it.mesh.position.y = 0.05; it.v.y *= -0.3; it.v.x *= 0.6; it.v.z *= 0.6 }
        it.mesh.material.opacity = t
      } else if (it.kind === 'explode') {
        it.mesh.scale.setScalar(0.3 + (1 - t) * it.radius)
        it.mesh.material.opacity = t * 0.8
      } else if (it.kind === 'float') {
        it.mesh.position.addScaledVector(it.v, dt)
        it.v.y *= 0.94
        it.mesh.material.opacity = t
      } else {
        it.mesh.material.opacity = t * 0.9
      }
      if (it.life <= 0) {
        this.scene.remove(it.mesh)
        if (it.mesh.material?.map) it.mesh.material.map.dispose()
        it.mesh.material?.dispose?.()
        this.items.splice(i, 1)
      }
    }
  }
}
