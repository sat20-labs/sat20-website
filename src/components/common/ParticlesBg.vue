<template>
  <canvas ref="canvas" class="particles-bg"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationFrame = null

const particles = []
const particleCount = 50
const particleProps = {
  color: 'rgba(42, 111, 255, 0.2)',
  radius: 2,
  speed: 0.5,
  connectionDistance: 150,
  connectionWidth: 1
}

function createParticle() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * particleProps.speed,
    vy: (Math.random() - 0.5) * particleProps.speed
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle())
  }
}

function drawParticle(ctx, particle) {
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particleProps.radius, 0, Math.PI * 2)
  ctx.fillStyle = particleProps.color
  ctx.fill()
}

function drawConnections(ctx) {
  ctx.strokeStyle = particleProps.color
  ctx.lineWidth = particleProps.connectionWidth

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < particleProps.connectionDistance) {
        const opacity = (1 - distance / particleProps.connectionDistance) * 0.5
        ctx.strokeStyle = `rgba(42, 111, 255, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

function updateParticles() {
  for (const particle of particles) {
    particle.x += particle.vx
    particle.y += particle.vy

    // 边界检查
    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1
  }
}

function animate() {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  updateParticles()
  drawConnections(ctx)
  
  for (const particle of particles) {
    drawParticle(ctx, particle)
  }

  animationFrame = requestAnimationFrame(animate)
}

function resizeCanvas() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

onMounted(() => {
  resizeCanvas()
  initParticles()
  animate()
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}
</style>
