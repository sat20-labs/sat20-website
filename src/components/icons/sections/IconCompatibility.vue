<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FF9800" />
        <stop offset="100%" stop-color="#FFC107" />
      </linearGradient>
    </defs>
    <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 3" 
          stroke="url(#iconGradient)" 
          fill="none" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" 
          stroke="url(#iconGradient)" 
          fill="url(#iconGradient)" 
          stroke-width="1.5"/>
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
