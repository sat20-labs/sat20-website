<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#aa38f2" />
        <stop offset="100%" stop-color="#2A6FFF" />
      </linearGradient>
    </defs>
    <path d="M16 18l6-6-6-6" stroke="url(#iconGradient)" fill="none" stroke-width="2"></path>
    <path d="M8 6l-6 6 6 6" stroke="url(#iconGradient)" fill="none" stroke-width="2"></path>
    <line x1="12" y1="2" x2="12" y2="22" stroke="url(#iconGradient)" fill="none" stroke-width="2"></line>
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
