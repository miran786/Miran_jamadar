import * as THREE from 'three'

// Rebuilds a photo as a cloud of GPU particles. The particles fly in and assemble
// on load, scatter away from the cursor, and drift apart as the hero scrolls away.

export interface PortraitOptions {
  src: string
  accent: string
  reducedMotion: boolean
  onReady?: (particleCount: number) => void
  onError?: () => void
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  uniform float uScatter;
  uniform vec2 uMouse;
  uniform float uMouseActive;
  uniform float uSize;
  uniform float uMotion;

  attribute vec3 aTarget;
  attribute vec3 aScatter;
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aSeed;

  varying vec3 vColor;
  varying float vAlpha;

  float easeOutCubic(float t) { return 1.0 - pow(1.0 - t, 3.0); }

  void main() {
    // Each particle starts a little later than the last, so the face assembles in waves.
    float t = clamp((uProgress - aSeed * 0.45) / 0.55, 0.0, 1.0);
    t = easeOutCubic(t);
    vec3 pos = mix(aScatter, aTarget, t);

    float n = aSeed * 6.2831;
    pos.x += sin(uTime * 0.6 + n) * 0.0022 * uMotion;
    pos.y += cos(uTime * 0.5 + n * 1.3) * 0.0022 * uMotion;
    pos.z += sin(uTime * 0.8 + n * 0.7) * 0.004 * uMotion;

    vec3 away = normalize(aScatter - aTarget + vec3(0.0001));
    pos += away * uScatter * (0.18 + aSeed * 0.55);
    pos.y += uScatter * aSeed * 0.12;

    vec2 d = pos.xy - uMouse;
    float f = (1.0 - smoothstep(0.0, 0.14, length(d))) * uMouseActive;
    pos.xy += normalize(d + 0.0001) * f * 0.055;
    pos.z += f * 0.09;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSize * (1.0 + f * 0.9) / -mv.z;

    vColor = aColor + f * vec3(0.10, 0.45, 0.55);
    vAlpha = (0.35 + 0.65 * t) * (1.0 - uScatter * 0.75);
  }
`

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.12, d) * vAlpha);
  }
`

interface Sampled {
  count: number
  target: Float32Array
  scatter: Float32Array
  color: Float32Array
  size: Float32Array
  seed: Float32Array
  rows: number
  aspect: number
}

function sampleImage(img: HTMLImageElement, maxPoints: number, accent: THREE.Color): Sampled {
  const aspect = img.naturalWidth / img.naturalHeight
  // About 60% of the frame is portrait; the white background is dropped below.
  const cols = Math.round(Math.sqrt((maxPoints / 0.6) * aspect))
  const rows = Math.round(cols / aspect)

  const canvas = document.createElement('canvas')
  canvas.width = cols
  canvas.height = rows
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!
  ctx.drawImage(img, 0, 0, cols, rows)
  const { data } = ctx.getImageData(0, 0, cols, rows)

  const target: number[] = []
  const scatter: number[] = []
  const color: number[] = []
  const size: number[] = []
  const seed: number[] = []
  const cell = 1 / rows

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const k = (j * cols + i) * 4
      const r = data[k] / 255
      const g = data[k + 1] / 255
      const b = data[k + 2] / 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
      const sat = max === 0 ? 0 : (max - min) / max
      if (lum > 0.8 && sat < 0.1) continue // studio background
      // Thin out the shoulders where the photo is cropped, so the bust dissolves instead of ending in a box.
      const edge = Math.min(Math.min(i / cols, 1 - i / cols) / 0.16, (1 - j / rows) / 0.24, 1)
      if (Math.random() > edge) continue

      const nx = i / cols - 0.5
      const ny = 0.5 - j / rows
      const x = nx * aspect + (Math.random() - 0.5) * cell * 0.7
      const y = ny + (Math.random() - 0.5) * cell * 0.7
      // A soft head-and-shoulders bulge so mouse tilt reads as depth.
      const bulge = Math.sqrt(Math.max(0, 1 - (nx / 0.5) ** 2))
      const z = 0.11 * bulge + (lum - 0.5) * 0.03
      target.push(x, y, z)

      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const rad = 0.6 + Math.random() * 0.9
      scatter.push(
        x + rad * Math.sin(phi) * Math.cos(theta),
        y + rad * Math.sin(phi) * Math.sin(theta),
        z + rad * Math.cos(phi) * 0.6,
      )

      // Dark hair and blazer would vanish on a black page: lift them toward the accent.
      const lift = Math.min(1, Math.max(0, (0.38 - lum) / 0.38)) * 0.8
      let cr = r + (accent.r * 0.5 - r) * lift
      let cg = g + (accent.g * 0.5 - g) * lift
      let cb = b + (accent.b * 0.5 - b) * lift
      if (lift > 0.3 && Math.random() < 0.05) {
        cr = accent.r
        cg = accent.g
        cb = accent.b
      }
      color.push(cr, cg, cb)
      size.push(0.75 + Math.random() * 0.5 + lum * 0.25)
      seed.push(Math.random())
    }
  }

  return {
    count: seed.length,
    target: new Float32Array(target),
    scatter: new Float32Array(scatter),
    color: new Float32Array(color),
    size: new Float32Array(size),
    seed: new Float32Array(seed),
    rows,
    aspect,
  }
}

export function mountParticlePortrait(container: HTMLElement, opts: PortraitOptions): () => void {
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' })
  } catch {
    opts.onError?.()
    return () => {}
  }

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  renderer.setPixelRatio(pixelRatio)
  renderer.setClearColor(0x000000, 0)
  renderer.domElement.setAttribute('aria-hidden', 'true')
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.z = 10
  const visibleHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))

  const accent = new THREE.Color(opts.accent)
  const uniforms = {
    uTime: { value: 0 },
    uProgress: { value: opts.reducedMotion ? 1 : 0 },
    uScatter: { value: 0 },
    uMouse: { value: new THREE.Vector2(10, 10) },
    uMouseActive: { value: 0 },
    uSize: { value: 30 },
    uMotion: { value: opts.reducedMotion ? 0 : 1 },
  }

  let points: THREE.Points | null = null
  let sampled: Sampled | null = null
  let disposed = false
  let raf = 0
  let visible = true
  const start = performance.now()
  const pointer = { x: 0, y: 0, inside: false }
  const tilt = { x: 0, y: 0 }

  const resize = () => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    if (points && sampled) {
      const visibleWidth = visibleHeight * camera.aspect
      const scale = Math.min(visibleHeight * 0.96, (visibleWidth * 0.96) / sampled.aspect)
      points.scale.setScalar(scale)
      // Point diameter of about 1.5 grid cells, in device pixels at the camera distance.
      const cellPx = (scale / sampled.rows) * (h / visibleHeight)
      uniforms.uSize.value = cellPx * 1.5 * pixelRatio * camera.position.z
    }
    if (opts.reducedMotion) renderer.render(scene, camera)
  }

  const onPointerMove = (e: PointerEvent) => {
    const rect = container.getBoundingClientRect()
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    pointer.inside = pointer.x > -1 && pointer.x < 1 && pointer.y > -1 && pointer.y < 1
  }
  const onPointerLeave = () => {
    pointer.inside = false
  }

  const onScroll = () => {
    const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9)))
    uniforms.uScatter.value = Math.pow(progress, 1.3)
    if (opts.reducedMotion) renderer.render(scene, camera)
  }

  const tick = () => {
    raf = requestAnimationFrame(tick)
    if (!visible || document.hidden || !points) return
    const elapsed = (performance.now() - start) / 1000
    uniforms.uTime.value = elapsed
    uniforms.uProgress.value = Math.min(1, Math.max(0, (elapsed - 0.15) / 2.6))

    // Map the pointer onto the portrait plane, in the points' local units.
    const s = points.scale.x
    const halfH = visibleHeight / 2
    const halfW = halfH * camera.aspect
    uniforms.uMouse.value.set((pointer.x * halfW) / s, (pointer.y * halfH) / s)
    const targetActive = pointer.inside ? 1 : 0
    uniforms.uMouseActive.value += (targetActive - uniforms.uMouseActive.value) * 0.08

    const tx = pointer.inside ? pointer.y * 0.12 : 0
    const ty = pointer.inside ? pointer.x * 0.28 : Math.sin(elapsed * 0.35) * 0.08
    tilt.x += (tx - tilt.x) * 0.05
    tilt.y += (ty - tilt.y) * 0.05
    points.rotation.x = -tilt.x
    points.rotation.y = tilt.y

    renderer.render(scene, camera)
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
  })
  io.observe(container)
  const ro = new ResizeObserver(resize)
  ro.observe(container)

  const img = new Image()
  img.decoding = 'async'
  img.src = opts.src
  img
    .decode()
    .then(() => {
      if (disposed) return
      const maxPoints = container.clientWidth < 520 ? 15000 : 30000
      sampled = sampleImage(img, maxPoints, accent)
      const geometry = new THREE.BufferGeometry()
      // `position` is required by three.js for bounds; the shader uses aTarget/aScatter.
      geometry.setAttribute('position', new THREE.BufferAttribute(sampled.target, 3))
      geometry.setAttribute('aTarget', new THREE.BufferAttribute(sampled.target, 3))
      geometry.setAttribute('aScatter', new THREE.BufferAttribute(sampled.scatter, 3))
      geometry.setAttribute('aColor', new THREE.BufferAttribute(sampled.color, 3))
      geometry.setAttribute('aSize', new THREE.BufferAttribute(sampled.size, 1))
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(sampled.seed, 1))
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 3)

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
      })
      points = new THREE.Points(geometry, material)
      scene.add(points)
      resize()
      onScroll()
      opts.onReady?.(sampled.count)
      if (opts.reducedMotion) renderer.render(scene, camera)
      else tick()
    })
    .catch(() => opts.onError?.())

  if (!opts.reducedMotion) {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
    disposed = true
    cancelAnimationFrame(raf)
    io.disconnect()
    ro.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    document.documentElement.removeEventListener('pointerleave', onPointerLeave)
    window.removeEventListener('scroll', onScroll)
    if (points) {
      points.geometry.dispose()
      ;(points.material as THREE.Material).dispose()
    }
    renderer.dispose()
    renderer.domElement.remove()
  }
}
