  <template>
    <BaseIcon :size="size">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFC107" />
          <stop offset="100%" stop-color="#FF9800" />
        </linearGradient>
      </defs>
      <path d="M20 7h-3a2 2 0 0 1-2-2V2" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
      <path d="M9 18h6" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
      <path d="M12 22v-4" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
      <path d="m9 8 3 3 3-3" stroke="url(#iconGradient)" fill="none" stroke-width="2" />
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