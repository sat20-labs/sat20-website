<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" :style="{ 'stop-color': startColor }" />
        <stop offset="100%" :style="{ 'stop-color': endColor }" />
      </linearGradient>
    </defs>
    <slot></slot>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  startColor: {
    type: String,
    default: '#fe53f9'  // 主色调
  },
  endColor: {
    type: String,
    default: '#2A6FFF'  // 霓虹色
  }
});

const style = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size
}));
</script>
