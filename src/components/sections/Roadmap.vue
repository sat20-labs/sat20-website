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
            <div v-for="(phase, index) in phases2024" :key="index" class="timeline-item"
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
                  <li v-for="(item, itemIndex) in getPhaseItems(phase.key)" :key="itemIndex">
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
            <div v-for="(phase, index) in phases2025" :key="index" class="timeline-item"
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
                  <li v-for="(item, itemIndex) in getPhaseItems(phase.key)" :key="itemIndex">
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
  { key: 'phase2', status: 'completed' }
];

// 2025年的阶段
const phases2025 = [
  { key: 'phase3', status: 'inProgress' },
  { key: 'phase4', status: 'upcoming' }
];
</script>

<style lang="scss" scoped>
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
    padding: 3rem 0;
    margin: 3rem auto;
    max-width: 1000px;
    
    // 渐变时间线
    &::before {
      content: '';
      position: absolute;
      top: 50px;
      // left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: calc(100% - 100px);
      background: linear-gradient(135deg, var(--primary), var(--neon));
      opacity: 0.6;
      z-index: 0;
      box-shadow: 0 0 20px var(--shadow-color);
    }

    .year-dot{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 4rem;
      margin-right: 2rem;
      position: relative;             

      // 时间点
      &::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background: var(--primary);
        border-radius: 50%;
        // left: 50%;
        top: 5px;
        transform: translateX(-50%);
        box-shadow: 0 0 15px var(--shadow-color);
        z-index: 1;
        transition: all 0.3s ease;
      }

      &:hover {
        &::before {
          transform: translateX(-50%) scale(1.5);
          box-shadow: 0 0 30px var(--shadow-color);
          background: var(--neon);
        }
       
      }
    }
    
  }
 


.year-section {
  margin-bottom: 4rem;
}

.year-marker {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}


.year-title {
    font-size: 2.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--primary) 0%, var(--neon) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 2rem;    
  }

.year-content {
  padding-left: 2rem;
  border-left: 2px solid var(--border-color);
}


 

.timeline-item {
  flex: 0 0 calc(50% - 2rem);
  margin-left: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid var(--card-border);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
 

  &:hover {
    transform: translateY(-5px);
    background: var(--card-hover);
    border-color: var(--card-hover-border);
    box-shadow: 0 10px 30px var(--shadow-color);

    &::before {
      opacity: 1;
    }

    &::after {
      left: 100%;
    }

    &+.timeline-phase::before {
      transform: translateX(-50%) scale(1.5);
      box-shadow: 0 0 30px var(--shadow-color);
      background: var(--neon);
    }
  }

  /* 发光边框效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 1.5px;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* 微光扫过效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent);
    transition: 0.5s;
  }

  .phase-time {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .phase-title {
    font-size: 1.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--primary) 0%, var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    // text-align: center;
    margin-bottom: 1rem;     
  }

  .phase-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
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
  color: #686868;
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