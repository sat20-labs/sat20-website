<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD700" />
        <stop offset="100%" stop-color="#FF8C00" />
      </linearGradient>
    </defs>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M12 2v20"
          stroke="url(#iconGradient)"
          stroke-width="0.5"
          stroke-dasharray="1 3"/>
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
