<template>
  <BaseIcon :size="size">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" 
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"/>
    <circle cx="12" cy="16" r="1"
            fill="url(#iconGradient)"/>
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
