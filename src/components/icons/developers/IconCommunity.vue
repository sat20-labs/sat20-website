<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#iconGradient)" fill="none" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="9" cy="7" r="4" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
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
