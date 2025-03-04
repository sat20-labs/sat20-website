<template>
  <BaseIcon :size="size">    
    <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FF9800" />
    </linearGradient>
  </defs> 
    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 15L16 10L5 21" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
