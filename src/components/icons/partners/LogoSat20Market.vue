<template>
  <BaseLogo :size="size">
    <path 
      d="M4 12h16M12 4v16"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      fill="none"
    />
    <path 
      d="M8 8l8 8M16 8l-8 8"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      fill="none"
    />
  </BaseLogo>
</template>

<script setup>
import BaseLogo from './BaseLogo.vue';

defineProps({
  size: {
    type: [Number, String],
    default: 32
  }
});
</script>
