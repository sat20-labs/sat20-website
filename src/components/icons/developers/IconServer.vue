  <template>
    <BaseIcon :size="size">    
      <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFC107" />
        <stop offset="100%" stop-color="#FF9800" />
      </linearGradient>
    </defs> 
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

  