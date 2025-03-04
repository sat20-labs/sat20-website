  <template>
    <BaseIcon :size="size">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFC107" />
          <stop offset="100%" stop-color="#FF9800" />
        </linearGradient>
      </defs>
      <path d="M22 12A10 10 0 0 0 12 2v10z" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" stroke="url(#iconGradient)" fill="none"
        stroke-width="2" />
      <path d="M13 2.05c2.963.165 5.582 1.517 7.45 3.55" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
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
