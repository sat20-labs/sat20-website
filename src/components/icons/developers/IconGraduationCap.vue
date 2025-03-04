<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
  </BaseIcon>
</template>

<script setup>
import BaseIcon from '../base/BaseIcon.vue';
defineProps({
  size: {
    type: [Number, String],
    default: 32
  }
});
</script>