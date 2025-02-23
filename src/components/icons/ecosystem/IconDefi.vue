<template>
  <BaseIcon :size="size">
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke="url(#iconGradient)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
