<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs>
    <path d="M10 5h4v2h-4zM4 9h16v12H4z" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
    <path d="M8 3v4m8-4v4M4 7h16" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
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
