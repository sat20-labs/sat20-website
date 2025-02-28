<template>
  <div class="technology-page">
    <!-- 英雄区域 -->
    <section class="hero-section container">
      <h1>{{ t('technology.hero.title') }}</h1>
      <p class="hero-description">{{ t('technology.description') }}</p>
    </section>

    <!-- 整体架构概览 -->
    <section class="architecture-section container">
      <h2 class="section-title">{{ t('technology.architecture.title') }}</h2>
      <div class="architecture-overview">
        <template v-for="(layer, index) in architectureLayers" :key="index">
          <div class="layer-card">
            <div class="icon-wrapper">
              <component :is="layer.icon" class="tech-icon" :size="48" />
            </div>
            <h3 class="layer-title">{{ layer.title }}</h3>
            <p class="layer-desc">{{ layer.desc }}</p>
          </div>
          <div v-if="index < architectureLayers.length - 1" class="bi-directional-arrow">
            <span class="arrow-left">←</span>
            <span class="arrow-right">→</span>
          </div>
        </template>
      </div>
    </section>

     <!-- 技术先进性对比 -->
     <section class="comparison-section container">
      <h2 class="section-title">{{ t('technology.comparison.title') }}</h2>
      <div class="tech-comparison">
        <table>
          <thead>
            <tr>
              <th v-for="(header, idx) in comparisonHeaders" :key="idx">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in comparisonData" :key="row.dimension">
              <td><strong>{{ row.dimension }}</strong></td>
              <td>{{ row.traditional }}</td>
              <td>{{ row.innovation }}</td>
              <td class="improvement-cell">{{ row.improvement }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  
    <!-- 核心创新价值 -->
    <section class="innovation-section container">
      <h2 class="section-title">{{ t('technology.innovation.title') }}</h2>
      <div class="innovation-grid">
        <div 
          v-for="(item, index) in innovations"
          :key="item.title"
          class="innovation-card"
        >
          <div class="card-header">
            <component :is="getInnovationIcon(item.title)" class="card-icon" :size="32" />
            <h3 class="card-title">{{ item.title }}</h3>
          </div>
          <ul class="feature-list">
            <li 
              v-for="(feature, fIndex) in item.features"
              :key="fIndex"
              class="feature-item"
            >
              <!-- <span class="feature-icon">•</span> -->
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 四大技术支柱 -->
    <section class="pillars-section container">
      <h2 class="section-title">{{ t('technology.pillars.title') }}</h2>
      <div class="pillars-grid">
        <div 
          v-for="(pillar, index) in pillars"
          :key="pillar.title"
          class="pillar-card"
        >
          <div class="pillar-header">
            <div class="pillar-number">0{{ index + 1 }}</div>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
          </div>
          <div class="pillar-body">
            <div class="innovation-tag">{{ pillar.innovation }}</div>
            <ul class="feature-list">
              <li 
                v-for="(feature, fIndex) in pillar.features"
                :key="fIndex"
                class="feature-item"
              >
                <span class="feature-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术演进路线 -->
    <section class="roadmap-section container">
      <h2 class="section-title">{{ t('technology.roadmap.title') }}</h2>
      <div class="timeline">
        <div 
          v-for="(phase, index) in roadmapPhases"
          :key="phase.time"
          class="timeline-phase"
          :class="{ 'reverse-layout': index % 2 === 0 }"
        >
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="phase-content">
            <div class="phase-time">{{ phase.time }}</div>
            <div class="phase-desc">{{ phase.desc }}</div>
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import '@/assets/styles/pages/_technology.scss';
import IconBitcoin from '@/components/icons/tech/IconBitcoin.vue';
import IconLightning from '@/components/icons/tech/IconLightning.vue';
import IconGlobe from '@/components/icons/tech/IconGlobe.vue';
import IconSatoshiSystem from '@/components/icons/tech/IconSatoshiSystem.vue';
import IconSmartNetwork from '@/components/icons/tech/IconSmartNetwork.vue';

const { t, tm } = useI18n();

// 国际化数据结构
const techData = computed(() => ({
  hero: {
    title: t('technology.hero.title'),
    description: t('technology.description')
  },
  architecture: {
    title: t('technology.architecture.title'),
    base: {
      title: t('technology.architecture.base.title'),
      desc: t('technology.architecture.base.desc')
    },
    protocol: {
      title: t('technology.architecture.protocol.title'),
      desc: t('technology.architecture.protocol.desc')
    },
    application: {
      title: t('technology.architecture.application.title'),
      desc: t('technology.architecture.application.desc')
    }
  },
  comparison: {
    title: t('technology.comparison.title'),
    dimensions: tm('technology.comparison.dimensions'),
    traditional: tm('technology.comparison.traditional'),
    innovation: tm('technology.comparison.innovation'),
    improvement: tm('technology.comparison.improvement')
  },
  innovation: {
    title: t('technology.innovation.title'),
    items: tm('technology.innovation.items')
  },
  pillars: {
    title: t('technology.pillars.title'),
    items: tm('technology.pillars.items')
  },
  roadmap: {
    title: t('technology.roadmap.title'),
    phases: tm('technology.roadmap.phases')
  }
}));

// 数据获取方法增强
const getTechSection = (section) => {
  const data = techData.value[section];
  if (!data) return [];
  
  switch(section) {
    case 'architecture':
      return [
        { icon: IconBitcoin, title: data.base.title, desc: data.base.desc },
        { icon: IconLightning, title: data.protocol.title, desc: data.protocol.desc },
        { icon: IconGlobe, title: data.network.title, desc: data.network.desc }
      ];
    case 'comparison':
      return Object.entries(data.dimensions || {}).map(([key, dim]) => ({
        dimension: dim,
        traditional: data.traditional[key],
        innovation: data.innovation[key],
        improvement: data.improvement[key]
      }));
    case 'innovation':
      return data.items || [];
    case 'pillars':
      return data.items || [];
    case 'roadmap':
      return data.phases || [];
    default:
      return [];
  }
};

// 响应式数据源
const innovations = computed(() => getTechSection('innovation'));
const pillars = computed(() => getTechSection('pillars'));
const roadmapPhases = computed(() => getTechSection('roadmap'));
const architectureLayers = computed(() => [
  {
    icon: IconBitcoin,
    title: t('technology.architecture.base.title'),
    desc: t('technology.architecture.base.desc')
  },
  {
    icon: IconLightning,
    title: t('technology.architecture.protocol.title'),
    desc: t('technology.architecture.protocol.desc')
  },
  {
    icon: IconGlobe,
    title: t('technology.architecture.application.title'),
    desc: t('technology.architecture.application.desc')
  }
]);
const comparisonData = computed(() => getTechSection('comparison'));
const comparisonHeaders = computed(() => tm('technology.comparison.headings'));

// 获取创新图标
const getInnovationIcon = (title) => {
  // 使用对象的键值对来映射标题和图标
  const iconMap = {
    // 中文标题
    '聪本位体系': IconSatoshiSystem,
    '智能进化网络': IconSmartNetwork,
    // 英文标题 (从 en.js 中获取的实际标题)
    'Satoshi-based System': IconSatoshiSystem,
    'Smart Evolution Network': IconSmartNetwork
  };
  return iconMap[title] || null;
};
</script>

<style scoped>
.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-icon {
  width: 3rem;
  height: 3rem;
  color: var(--primary);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: rgba(42, 111, 255, 0.1);
  margin: 0 auto 1.5rem;
}

.layer-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.layer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.layer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.layer-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

.bi-directional-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 0 16px;
}

.arrow-left, .arrow-right {
  font-size: 1.2em;
  color: #007bff;
}

.layer-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
  color: #007bff;
}

.card-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  color: #007bff;
  flex-shrink: 0;
  margin-top: 2px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #1a1f2e;
  border-radius: 8px;
  background: #141824;
}

.card-title {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.4;
  color: #007bff;
}

.innovation-card {
  padding: 0;
  background: transparent;
}

.feature-list {
  padding: 0 16px 16px;
}
</style>