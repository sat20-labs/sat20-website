<template>
  <BaseIcon :size="size">
    <path
      d="M6 12h4m-2-2v4M15 12h.01M18 12h.01"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="url(#iconGradient)"
      stroke-width="2"
      fill="none"
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
