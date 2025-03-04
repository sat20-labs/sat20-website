<template>
  <BaseIcon :size="size">    
    <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FF9800" />
    </linearGradient>
  </defs> 
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 2V8H20" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 13H8" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 17H8" stroke="url(#iconGradient)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 9H9H8" stroke="url(#iconGradient)" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
