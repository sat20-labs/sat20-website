<template>
  <BaseIcon :size="size">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" 
          stroke="url(#iconGradient)" 
          fill="none" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="1.5" 
            stroke="url(#iconGradient)" 
            fill="url(#iconGradient)" 
            stroke-width="1"/>
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
