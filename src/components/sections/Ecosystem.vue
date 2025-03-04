<template>
  <section class="ecosystem" id="eco">
    <div class="container">
      <h2 class="section-title gradient-text">{{ t('home.ecosystem.title') }}</h2>      
      
      <!-- 应用场景 -->
      <div class="eco-section">
        <h3 class="section-subtitle">{{ t('home.ecosystem.applications.title') }}</h3>
        <div class="card-grid">
          <div v-for="(app, index) in applications" 
               :key="index"
               class="eco-card"
               :class="{ 'active': activeCard === `app-${index}` }"
               @mouseenter="activeCard = `app-${index}`"
               @mouseleave="activeCard = null">
            <div class="card-icon">
              <component :is="app.icon" :size="36" />
            </div>
            <h4>{{ tm(`home.ecosystem.applications.items.${index}.title`) }}</h4>
            <p>{{ tm(`home.ecosystem.applications.items.${index}.description`) }}</p>
          </div>
        </div>
      </div>
      
      <!-- 合作伙伴 -->
      <div class="eco-section">
        <h3 class="section-subtitle">{{ t('home.ecosystem.partners.title') }}</h3>
        <div class="card-grid">
          <div v-for="(partner, index) in partners" 
               :key="index"
               class="eco-card"
               :class="{ 'active': activeCard === `partner-${index}` }"
               @mouseenter="activeCard = `partner-${index}`"
               @mouseleave="activeCard = null">
            <div class="card-icon">
              <component :is="partner.icon" :size="32" />
            </div>
            <h4>{{ tm(`home.ecosystem.partners.items.${index}.title`) }}</h4>
            <p>{{ tm(`home.ecosystem.partners.items.${index}.description`) }}</p>
          </div>
        </div>
      </div>      
      
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';

// 导入图标组件
import IconDefi from '@/components/icons/sections/IconDefi.vue';
import IconNft from '@/components/icons/sections/IconNft.vue';
import IconGaming from '@/components/icons/sections/IconGaming.vue';
import IconDecentralized from '@/components/icons/sections/IconDecentralized.vue';
import IconPerformance from '@/components/icons/sections/IconPerformance.vue';
import IconCost from '@/components/icons/sections/IconCost.vue';

const { t, tm } = useI18n();

const applications = [
  { icon: IconDefi },
  { icon: IconNft },
  { icon: IconGaming }
];

const partners = [
  { icon: IconDecentralized },
  { icon: IconPerformance },
  { icon: IconCost }
];

const icons = [IconDecentralized, IconPerformance, IconCost];
</script>

<style lang="scss" scoped>
.ecosystem {
  padding: 6rem 0;
  background: var(--bg-primary);
  color: var(--text-primary);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--primary); /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
    -webkit-text-fill-color: transparent;
  }

  .section-subtitle {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
    text-align: center;
  }

  .eco-section {
    margin-bottom: 4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .eco-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      .card-icon {
        transform: scale(1.1);
        // background: rgba(var(--primary-rgb), 0.2);
      }

      &::before {
        opacity: 1;
      }

      &::after {
        left: 100%;
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
      padding: 2px;
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
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }
  }

  .card-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    // background: rgba(var(--primary-rgb), 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &.highlight {
      background: var(--card-highlight);
      border-color: var(--card-highlight-border);
    }

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      .feature-icon {
        transform: scale(1.1);
        background: rgba(var(--primary-rgb), 0.2);
      }

      &::before {
        opacity: 1;
      }

      &::after {
        left: 100%;
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
      padding: 2px;
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
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }
  }

  .feature-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .feature-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 600;
  }

  .feature-description {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.5rem;
    }

    .card-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
}
</style>