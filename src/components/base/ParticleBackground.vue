<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
let ctx = null;
let animationFrameId = null;
let particles = [];

const PARTICLE_COUNT = 50;
const PARTICLE_SIZE = 2;
const PARTICLE_SPEED = 0.5;
const CONNECTION_DISTANCE = 150;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = PARTICLE_SIZE;
    this.speedX = Math.random() * PARTICLE_SPEED - PARTICLE_SPEED/2;
    this.speedY = Math.random() * PARTICLE_SPEED - PARTICLE_SPEED/2;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 196, ${this.opacity})`;
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particles.push(new Particle(x, y));
  }
}

function drawConnections() {
  particles.forEach((particle1, i) => {
    particles.slice(i + 1).forEach(particle2 => {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < CONNECTION_DISTANCE) {
        const opacity = (1 - distance/CONNECTION_DISTANCE) * 0.2;
        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.strokeStyle = `rgba(42, 111, 255, ${opacity})`;
        ctx.stroke();
      }
    });
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  drawConnections();
  animationFrameId = requestAnimationFrame(animate);
}

function handleResize() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    init();
  }
}

onMounted(() => {
  ctx = canvas.value.getContext('2d');
  handleResize();
  animate();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: var(--bg);
}
</style> 