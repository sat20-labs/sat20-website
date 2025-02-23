<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF69B4" />
        <stop offset="100%" stop-color="#FFC67D" />
      </linearGradient>
    </defs>
    <path d="M20 7h-3m3 10h-3M9 4L4 9l5 5M15 10l5 5-5 5" 
          stroke="url(#iconGradient)" 
          fill="none" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    <circle cx="9" cy="9" r="2" 
            stroke="url(#iconGradient)" 
            fill="url(#iconGradient)" 
            stroke-width="1.5"/>
    <circle cx="15" cy="15" r="2" 
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
