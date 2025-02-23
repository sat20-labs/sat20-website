<template>
  <BaseIcon :size="size">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#iconGradient)"
      stroke-width="2"
      fill="none"
    />
    <path
      d="M3 14l4-4 6 6"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M14 12l3-3 4 4"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="1.5"
      fill="url(#iconGradient)"
    />
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
