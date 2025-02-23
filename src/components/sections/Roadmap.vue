<template>
  <section class="roadmap-section" id="roadmap">
    <div class="container">
      <!-- <h2 class="section-title gradient-text">{{ t('roadmap.title') }}</h2> -->
      
      <div class="timeline">
        <!-- 2024年 -->
        <div class="year-section">
          <div class="year-marker">
            <div class="year-dot"></div>
            <h3 class="year-title">{{ t('roadmap.years.2024') }}</h3>
          </div>
          <div class="year-content">
            <div v-for="(phase, index) in phases2024" 
                 :key="index"
                 class="timeline-item"
                 :class="{ 'active': activePhase === phase.key }">
              <div class="phase-content">
                <div class="phase-header">
                  <span class="phase-date">{{ t(`roadmap.phases.${phase.key}.date`) }}</span>
                  <span class="phase-status" :class="phase.status">
                    {{ t(`roadmap.status.${phase.status}`) }}
                  </span>
                </div>
                <h4 class="phase-title">{{ t(`roadmap.phases.${phase.key}.title`) }}</h4>
                <ul class="phase-items">
                  <li v-for="(item, itemIndex) in getPhaseItems(phase.key)" 
                      :key="itemIndex">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 2025年 -->
        <div class="year-section">
          <div class="year-marker">
            <div class="year-dot"></div>
            <h3 class="year-title">{{ t('roadmap.years.2025') }}</h3>
          </div>
          <div class="year-content">
            <div v-for="(phase, index) in phases2025"
                 :key="index"
                 class="timeline-item"
                 :class="{ 'active': activePhase === phase.key }">
              <div class="phase-content">
                <div class="phase-header">
                  <span class="phase-date">{{ t(`roadmap.phases.${phase.key}.date`) }}</span>
                  <span class="phase-status" :class="phase.status">
                    {{ t(`roadmap.status.${phase.status}`) }}
                  </span>
                </div>
                <h4 class="phase-title">{{ t(`roadmap.phases.${phase.key}.title`) }}</h4>
                <ul class="phase-items">
                  <li v-for="(item, itemIndex) in getPhaseItems(phase.key)" 
                      :key="itemIndex">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, te, tm } = useI18n({ useScope: 'global' });
const activePhase = ref(null);

// 获取各阶段的items
const getPhaseItems = (phaseKey) => {
  const path = `roadmap.phases.${phaseKey}`;
  const phase = tm(path);
  if (phase && Array.isArray(phase.items)) {
    return phase.items;
  }
  console.warn(`No items found for phase: ${phaseKey}`);
  return [];
};

// 2024年的阶段
const phases2024 = [
  { key: 'phase1', status: 'completed' },
  { key: 'phase2', status: 'inProgress' }
];

// 2025年的阶段
const phases2025 = [
  { key: 'phase3', status: 'upcoming' },
  { key: 'phase4', status: 'upcoming' }
];
</script>

<style scoped>
.roadmap-section {
  padding: 80px 0;
  background: var(--bg);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.year-section {
  margin-bottom: 4rem;
}

.year-marker {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.year-dot {
  width: 12px;
  height: 12px;
  background: var(--primary);
  border-radius: 50%;
  margin-right: 1rem;
}

.year-title {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 600;
}

.year-content {
  padding-left: 2rem;
  border-left: 2px solid var(--border-color);
}

.timeline-item {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: fadeInLeft 0.6s ease forwards;
  opacity: 0;
}

.timeline-item:hover {
  background: var(--card-hover);
  border-color: var(--card-hover-border);
  transform: translateX(10px);
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.phase-date {
  color: var(--primary);
  font-weight: 600;
}

.phase-status {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.phase-status.completed {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
}

.phase-status.inProgress {
  background: rgba(255, 166, 0, 0.1);
  color: #ffa600;
}

.phase-status.upcoming {
  background: rgba(0, 157, 255, 0.1);
  color: #009dff;
}

.phase-title {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.phase-items {
  list-style: none;
  padding: 0;
}

.phase-items li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 20px;
  position: relative;
}

.phase-items li::before {
  content: '•';
  color: var(--primary);
  position: absolute;
  left: 0;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .year-title {
    font-size: 1.5rem;
  }
  
  .timeline-item {
    padding: 1.5rem;
  }
  
  .phase-title {
    font-size: 1.2rem;
  }
}
</style>