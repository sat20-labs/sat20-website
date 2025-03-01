<template>
  <div class="user-page">
    <ParticlesBg class="particles-container" />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="gradient-text">{{ t('user.title') }}</h1>
      <p class="hero-subtitle">{{ t('user.subtitle') }}</p>
      <p class="hero-description">{{ t('user.description') }}</p>
    </section>

    <!-- Minting Section -->
    <section class="section minting-section">
      <h2 class="section-title">{{ t('user.sections.minting.title') }}</h2>
      <p class="section-description">{{ t('user.sections.minting.description') }}</p>
      
      <div class="tutorials-grid">
        <div v-for="(tutorial, index) in mintingTutorials" 
             :key="index"
             class="tutorial-card"
             :class="{ 'active': tutorial.status === 'active' }">
          <div class="card-header">
            <component :is="getIconComponent(tutorial.icon)" class="card-icon" />
            <h3>{{ tutorial.title }}</h3>
          </div>
          <p class="card-description">{{ tutorial.description }}</p>
          <ul v-if="tutorial.items" class="tutorial-items">
            <li v-for="(item, itemIndex) in tutorial.items" 
                :key="itemIndex">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Trading Section -->
    <section class="section trading-section">
      <h2 class="section-title">{{ t('user.sections.trading.title') }}</h2>
      <div class="feature-card development">
        <component :is="getIconComponent('swap')" class="card-icon" />
        <div class="card-content">
          <h3>{{ t('user.sections.trading.description') }}</h3>
          <span class="development-badge">In Development...</span>
        </div>
      </div>
      <div class="features-grid">
        <div v-for="feature in tm('user.sections.trading.features')" :key="feature.title" class="feature-item">
          <component :is="getIconComponent(feature.icon)" class="feature-icon" />
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testing Section -->
    <section class="section testing-section">
      <h2 class="section-title">{{ t('user.sections.testing.title') }}</h2>
      <div class="feature-card">
        <component :is="getIconComponent('testcoin')" class="card-icon" />
        <div class="card-content">
          <h3>{{ t('user.sections.testing.description') }}</h3>
          <a :href="t('user.sections.testing.link')" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="demo-link">
             Visit Testnet →
          </a>
        </div>
      </div>
      <div class="features-grid">
        <div v-for="feature in tm('user.sections.testing.features')" :key="feature.title" class="feature-item">
          <component :is="getIconComponent(feature.icon)" class="feature-icon" />
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ParticlesBg from '@/components/ParticlesBg.vue'

// 钱包功能图标
import IconWallet from '../components/icons/user/IconWallet.vue'
import IconToken from '../components/icons/user/IconToken.vue'
import IconManage from '../components/icons/user/IconManage.vue'

// 交易功能图标
import IconTrade from '../components/icons/user/IconTrade.vue'
import IconPool from '../components/icons/user/IconPool.vue'
import IconTranscending from '../components/icons/user/IconTranscending.vue'

// 测试网功能图标
import IconFaucet from '../components/icons/user/IconFaucet.vue'
import IconTest from '../components/icons/user/IconTest.vue'
import IconTradeing from '../components/icons/user/IconTradeing.vue'

import IconSwap from '../components/icons/user/IconSwap.vue'
import IconTestCoin from '../components/icons/user/IconTestCoin.vue'

const { t, tm } = useI18n()

const getIconComponent = (name) => {
  const iconMap = {
    // 钱包功能
    'wallet': IconWallet,
    'token': IconToken,
    'manage': IconManage,

    // 交易功能
    'trade': IconTrade,
    'pool': IconPool,
    'transcending': IconTranscending,

    // 测试网功能
    'faucet': IconFaucet,
    'test': IconTest,
    'tradeing': IconTradeing,

    // 其他功能
    'swap': IconSwap,
    'testcoin': IconTestCoin
  }
  return iconMap[name] || null
}

const mintingTutorials = computed(() => {
  return tm('user.sections.minting.tutorials') || [];
});
</script>

<style scoped>
.user-page {
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  color: var(--text-primary);
  background: var(--bg-primary);
}

.hero-section {
  text-align: center;
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.gradient-text {
  font-size: 3rem;
  font-weight: 600;
  background: linear-gradient(45deg, var(--primary), var(--neon));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--primary); /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
  -webkit-text-fill-color: transparent;
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tutorial-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--card-border);
}

.tutorial-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
}

.tutorial-card.active {
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: 32px;
  height: 32px;
  color: var(--primary-color);
}

.card-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tutorial-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tutorial-items li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.tutorial-items li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.feature-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--card-border);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
}

.feature-card.development {
  border: 1px dashed var(--primary);
  opacity: 0.8;
}

.card-content {
  flex: 1;
}

.development-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.demo-link {
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: color 0.3s ease;
}

.demo-link:hover {
  color: var(--neon);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--card-border);
}

.feature-item:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
}

.feature-icon {
  width: 32px;
  height: 32px;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .feature-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .card-icon {
    margin: 0 auto;
  }
}
</style>
