<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--primary)" />
        <stop offset="100%" style="stop-color:var(--neon)" />
      </linearGradient>
    </defs>
    <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" fill="url(#iconGradient)" />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 32
  }
});
</script>
