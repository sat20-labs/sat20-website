<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--primary)" />
        <stop offset="100%" style="stop-color:var(--neon)" />
      </linearGradient>
    </defs>
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9zm-52.5 185.4L256 407.2 102.2 248.1c-37.2-38.4-35.2-99 4.7-135.4 35.6-32.7 89.7-29.7 122.1 4.3l26.6 27.5 26.6-27.5c32.4-33.9 86.5-37 122.1-4.3 39.8 36.4 41.8 97 4.5 135.3z" fill="url(#iconGradient)" />
  </svg>
</template>

<script setup>
// DeFi图标组件
defineProps({
  size: {
    type: [Number, String],
    default: 32
  }
});
</script>

<!-- <style scoped>
svg {
  color: var(--primary);
}
</style> -->