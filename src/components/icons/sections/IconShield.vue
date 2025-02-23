<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ff9800" />
        <stop offset="100%" stop-color="#ff6100" />
      </linearGradient>
    </defs>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M9 12l2 2 4-4"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
  </BaseIcon>
</template>

<script setup>
import BaseIcon from '../base/BaseIcon.vue';

defineProps({
  size: {
    type: [Number, String],
    default: 24
  }
});
</script>
