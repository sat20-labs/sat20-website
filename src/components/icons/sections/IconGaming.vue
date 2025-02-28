<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--primary)" />
        <stop offset="100%" style="stop-color:var(--neon)" />
      </linearGradient>
    </defs>
    <path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 98.31c-35.82 0-65.21 27.77-85.75 50.88-18.68 21.04-44.15 21.04-62.82 0-20.54-23.11-49.93-50.88-85.75-50.88-47.35 0-79.27 51.18-100.48 147.07-17.24 77.82-13.19 153.13 11.21 153.13 22.59 0 27.14-36.48 40.04-72.95 14.06-39.71 30.01-84.75 72.05-84.75 27.69 0 42.04 16.18 61.15 38.62 18.68 21.95 44.15 21.95 62.82 0 19.11-22.44 33.46-38.62 61.15-38.62 42.04 0 57.99 45.04 72.05 84.75 12.9 36.47 17.45 72.95 40.04 72.95 24.4 0 28.45-75.31 11.21-153.13z" fill="url(#iconGradient)" />
  </svg>
</template>

<script setup>
// 游戏图标组件
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
