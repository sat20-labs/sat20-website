<template>
  <BaseIcon :size="size">
    <slot></slot>
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
