<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs>
    <path d="M21 12l-8-8v16l8-8z" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M3 12h12" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M12 4v16" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round"
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
