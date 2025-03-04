<template>
  <BaseIcon :size="size">    
    <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FF9800" />
    </linearGradient>
  </defs> 
  <path d="M16 18L22 12L16 6" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 6L2 12L8 18" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
