<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--primary)" />
        <stop offset="100%" style="stop-color:var(--neon)" />
      </linearGradient>
    </defs>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zm-50.75 330.25L322.75 437.75c-4.25 4.25-10 6.25-15.75 6.25H160c-17.75 0-32-14.25-32-32V224c0-17.75 14.25-32 32-32h146.75c5.75 0 11.5 2 15.75 6.25l74.5 74.5c8.5 8.5 8.5 22.25 0 30.75l-74.5 74.5c-8.5 8.5-8.5 22.25 0 30.75zM224 256c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.25-32-32-32z" fill="url(#iconGradient)" />
  </svg>
</template>

<script setup>
// NFT图标组件
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
