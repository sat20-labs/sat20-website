<template>
  <section class="core-features" id="tech">
    <div class="container">
      <h2 class="section-title gradient-text">{{ title }}</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in features" 
             :key="index"
             class="feature-card"
             :class="{ 'highlight': feature.highlight }"
             @mouseover="activeFeature = index"
             @mouseleave="activeFeature = null">
          <div class="feature-icon">
            <component :is="icons[index]" :size="iconSize" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

// 异步加载图标组件
const IconSat = defineAsyncComponent(() => import('@/components/icons/sections/IconSat.vue'));
const IconNetwork = defineAsyncComponent(() => import('@/components/icons/sections/IconNetwork.vue'));
const IconCompatibility = defineAsyncComponent(() => import('@/components/icons/sections/IconCompatibility.vue'));
const IconSmartContract = defineAsyncComponent(() => import('@/components/icons/sections/IconSmartContract.vue'));
const IconFee = defineAsyncComponent(() => import('@/components/icons/sections/IconFee.vue'));

const iconSize = 32;
const activeFeature = ref(null);

const title = computed(() => t('home.features.title'));
const features = computed(() => tm('home.features.items'));

const icons = [IconSat, IconNetwork, IconCompatibility, IconSmartContract, IconFee];

// 添加鼠标追踪效果
onMounted(() => {
  const cards = document.querySelectorAll('.feature-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
});
</script>

<style scoped>
.core-features {
  padding: var(--spacing-xl) 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--primary); /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
  -webkit-text-fill-color: transparent;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 悬停效果 */
.feature-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover);
  border-color: var(--card-hover-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* 发光边框效果 */
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

/* 微光扫过效果 */
.feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.feature-card:hover::after {
  left: 100%;
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: rgba(var(--primary-rgb), 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background: rgba(var(--primary-rgb), 0.2);
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>