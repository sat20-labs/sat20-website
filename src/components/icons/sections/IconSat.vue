<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#iconGradient)" fill="none" stroke-width="2"/>
    <path d="M8 12h8M12 8v8" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="3" fill="url(#iconGradient)"/>
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
