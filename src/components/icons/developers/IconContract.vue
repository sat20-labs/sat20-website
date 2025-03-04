<template>
  <BaseIcon :size="size">    
    <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FF9800" />
    </linearGradient>
  </defs> 
    <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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