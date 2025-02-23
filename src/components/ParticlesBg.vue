<!-- ParticlesBg.vue -->
<template>
  <Particles
    id="tsparticles"
    :options="particleOptions"
    class="particles-layer"
  />
</template>

<script setup>
const particleOptions = {
  background: { color: 'transparent' },
  particles: {
    color: { value: ['#0100EC', '#FB36F4'] },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      outModes: 'bounce'
    },
    links: {
      enable: true,
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
      distance: 150
    },
    number: {
      value: 60,
      density: { enable: true, area: 800 }
    }
  }
}
</script>