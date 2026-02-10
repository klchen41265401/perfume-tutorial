<template>
  <div class="app-shell">
    <div ref="webglMount" class="webgl-bg" aria-hidden="true"></div>
    <div class="layout" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <aside class="side-rail">
        <NavBar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />
      </aside>
      <main ref="mainPanel" id="main-scroll" class="main-panel">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <FooterBar />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import * as THREE from 'three'

export default {
  name: 'App',
  components: { NavBar, FooterBar },
  data() {
    return {
      webgl: null,
      sidebarCollapsed: false
    }
  },
  mounted() {
    this.initWebgl()
  },
  beforeUnmount() {
    this.teardownWebgl()
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        const mainPanel = this.$refs.mainPanel
        if (mainPanel) {
          mainPanel.scrollTo({ top: 0, behavior: 'auto' })
        }
      })
    }
  },
  methods: {
    initWebgl() {
      const mount = this.$refs.webglMount
      if (!mount) return

      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x0b1a10, 0.018)

      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        200
      )
      camera.position.set(0, 0, 32)

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      mount.appendChild(renderer.domElement)

      const beams = new THREE.Group()
      const beamGeo = new THREE.CylinderGeometry(0.2, 6.5, 42, 28, 1, true)
      beamGeo.translate(0, 21, 0)
      beamGeo.rotateX(Math.PI / 2)

      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xf5d36a,
        transparent: true,
        opacity: 0.06,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })

      for (let i = 0; i < 9; i += 1) {
        const beam = new THREE.Mesh(beamGeo, beamMat)
        beam.position.set((Math.random() - 0.5) * 36, (Math.random() - 0.5) * 18, -18)
        beam.rotation.z = (Math.random() - 0.5) * 0.6
        beam.rotation.y = (Math.random() - 0.5) * 0.6
        beam.scale.x = 0.7 + Math.random() * 0.9
        beam.scale.z = 0.7 + Math.random() * 0.9
        beams.add(beam)
      }
      scene.add(beams)

      const dustCount = 2200
      const dustGeo = new THREE.BufferGeometry()
      const dustPos = new Float32Array(dustCount * 3)
      const dustSpeed = new Float32Array(dustCount)

      for (let i = 0; i < dustCount; i += 1) {
        dustPos[i * 3] = (Math.random() - 0.5) * 120
        dustPos[i * 3 + 1] = (Math.random() - 0.5) * 120
        dustPos[i * 3 + 2] = (Math.random() - 0.5) * 60 + 8
        dustSpeed[i] = 0.015 + Math.random() * 0.045
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))

      const dustMat = new THREE.PointsMaterial({
        color: 0xf7f2d5,
        size: 0.18,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      })
      const dust = new THREE.Points(dustGeo, dustMat)
      scene.add(dust)

      const clock = new THREE.Clock()
      const mouse = { x: 0, y: 0 }

      const handleMouse = (event) => {
        mouse.x = (event.clientX - window.innerWidth / 2) * 0.01
        mouse.y = (event.clientY - window.innerHeight / 2) * 0.01
      }

      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      }

      document.addEventListener('mousemove', handleMouse)
      window.addEventListener('resize', handleResize)

      const animate = () => {
        this.webgl.frameId = requestAnimationFrame(animate)
        const t = clock.getElapsedTime()

        beams.rotation.z = Math.sin(t * 0.08) * 0.08
        beams.children.forEach((beam, index) => {
          beam.material.opacity = 0.05 + Math.sin(t * 0.4 + index) * 0.015
        })

        const positions = dustGeo.attributes.position.array
        for (let i = 0; i < dustCount; i += 1) {
          positions[i * 3 + 1] += dustSpeed[i]
          positions[i * 3] += Math.sin(t + i) * 0.012
          if (positions[i * 3 + 1] > 60) positions[i * 3 + 1] = -60
        }
        dustGeo.attributes.position.needsUpdate = true

        camera.position.x += (mouse.x - camera.position.x) * 0.02
        camera.position.y += (-mouse.y - camera.position.y) * 0.02
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
      }

      this.webgl = {
        scene,
        camera,
        renderer,
        beams,
        dustGeo,
        dust,
        handleMouse,
        handleResize,
        frameId: null
      }

      animate()
    },
    teardownWebgl() {
      if (!this.webgl) return
      const { renderer, dustGeo, dust, beams, handleMouse, handleResize, frameId } = this.webgl

      if (frameId) cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)

      if (dustGeo) dustGeo.dispose()
      if (dust?.material) dust.material.dispose()
      if (beams) {
        beams.traverse((child) => {
          if (child.geometry) child.geometry.dispose()
          if (child.material) child.material.dispose()
        })
      }

      if (renderer) {
        renderer.dispose()
        if (renderer.domElement?.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
      }

      this.webgl = null
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
