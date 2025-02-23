<template>
  <div class="phase-content">
    <div class="phase-header">
      <span class="phase-date">{{ t(`roadmap.phases.${props.phase}.date`) }}</span>
      <h4 class="phase-title">{{ t(`roadmap.phases.${props.phase}.title`) }}</h4>
    </div>
    <ul class="phase-items">
      <li v-for="(item, index) in phaseItems" 
          :key="index"
          class="phase-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  phase: {
    type: String,
    required: true
  }
});

const phaseItems = computed(() => {
  return t(`roadmap.phases.${props.phase}.items`, [], { returnObjects: true });
});

// 确保调试信息输出
console.log('Phase:', props.phase);
console.log('Phase items:', phaseItems.value);
</script>

<style scoped>
.phase-content {
  background: rgba(123, 97, 255, 0.02);
  border: 1px solid rgba(123, 97, 255, 0.1);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.phase-date {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
}

.phase-title {
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
  font-weight: 600;
}

.phase-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-items li {
  color: var(--text-secondary);
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  position: relative;
  line-height: 1.5;
  transition: all 0.3s ease;
}

.phase-items li:last-child {
  margin-bottom: 0;
}

.phase-items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  transition: all 0.3s ease;
}

.phase-items li.completed {
  color: var(--neon);
}

.phase-items li.completed::before {
  background: var(--neon);
  transform: translateY(-50%) scale(1.2);
}

@media (max-width: 768px) {
  .phase-content {
    padding: var(--spacing-sm);
  }
  
  .phase-title {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-sm);
  }

  .phase-items li {
    font-size: 0.9rem;
    padding-left: var(--spacing-sm);
  }

  .phase-items li::before {
    width: 6px;
    height: 6px;
  }
}
</style> 