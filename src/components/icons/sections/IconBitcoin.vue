<template>
  <BaseIcon :size="size">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFD700" />
        <stop offset="100%" stop-color="#FFA07A" />
      </linearGradient>
    </defs>
    <path d="M11.767 19.089c4.924.868 9.593-2.527 10.461-7.451.868-4.924-2.527-9.593-7.451-10.461-4.924-.868-9.593 2.527-10.461 7.451-.868 4.924 2.527 9.593 7.451 10.461zM15.5 9.5c.828 0 1.5 1.567 1.5 3.5s-.672 3.5-1.5 3.5"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M12 8v8M9 8h6M9 12h6M9 16h6"
          stroke="url(#iconGradient)"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
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
