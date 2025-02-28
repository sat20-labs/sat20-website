<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--primary)" />
        <stop offset="100%" style="stop-color:var(--neon)" />
      </linearGradient>
    </defs>
    <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zm0 224H0v240c0 26.5 21.5 48 48 48h192V224zm272 0H272v288h192c26.5 0 48-21.5 48-48V224zm-48 160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32zm0-96c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32zm-160 96c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32zm0-96c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32z" fill="url(#iconGradient)" />
  </svg>
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
