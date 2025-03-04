<template>
  <div class="user-page">
    <ParticlesBg class="particles-container" />
    <div class="container">
      <h1 class="gradient-title">{{ t('user.title') }}</h1>
      <p class="subtitle">{{ t('user.subtitle') }}</p>
      <p class="description">{{ t('user.description') }}</p>


      <!-- Minting Section -->
      <section class="section minting-section">
        <h2 class="section-title">{{ t('user.sections.minting.title') }}</h2>
        <p class="section-description">{{ t('user.sections.minting.description') }}</p>

        <div class="tutorials-grid">
          <div v-for="(tutorial, index) in mintingTutorials" :key="index" class="tutorial-card"
            :class="{ 'active': tutorial.status === 'active' }">
            <div class="card-header">
              <component :is="getIconComponent(tutorial.icon)" class="card-icon" />
              <h3>{{ tutorial.title }}</h3>
            </div>
            <p class="card-description">{{ tutorial.description }}</p>
            <ul v-if="tutorial.items" class="tutorial-items">
              <li v-for="(item, itemIndex) in tutorial.items" :key="itemIndex">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Trading Section -->
      <section class="section trading-section">
        <h2 class="section-title">{{ t('user.sections.trading.title') }}</h2>

        <div class="trading-card development">
          <div class="card-header">
            <component :is="getIconComponent('swap')" class="card-icon" />
          </div>
          <div class="card-content">
            <h3>{{ t('user.sections.trading.description') }}</h3>
            <span class="development-badge">In Development...</span>
          </div>
        </div>

        <div class="tradingfeature-grid">
          <div v-for="feature in tm('user.sections.trading.features')" :key="feature.title" class="tradingfeature-card">
            <div class="card-header">
              <component :is="getIconComponent(feature.icon)" class="card-icon" />
              <h3>{{ feature.title }}</h3>
            </div>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- Testing Section -->
      <section class="section testing-section">
        <h2 class="section-title">{{ t('user.sections.testing.title') }}</h2>

        <div class="testing-card">
          <div class="card-header">
            <component :is="getIconComponent('testcoin')" class="card-icon" />
          </div>
          <div class="card-content">
            <h3>{{ t('user.sections.testing.description') }}</h3>
            <a :href="t('user.sections.testing.link')" target="_blank" rel="noopener noreferrer" class="demo-link">
              Visit Testnet →
            </a>
          </div>
        </div>

        <div class="testingfeature-grid">
          <div v-for="feature in tm('user.sections.testing.features')" :key="feature.title" class="testingfeature-card">
            <div class="card-header">
              <component :is="getIconComponent(feature.icon)" class="card-icon" />
              <h3>{{ feature.title }}</h3>
            </div>

            <p class="card-description">{{ feature.description }}</p>
          </div>

        </div>
      </section>
    </div>
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

<style lang="scss" scoped>
.user-page {
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  color: var(--text-primary);
  background: var(--bg-gradient-dark);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
}

.gradient-title {
  font-size: 3.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--neon) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.description {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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

/* 
.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
} */

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
  color: var(--primary);
  /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
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



.tradingfeature-grid,
.testingfeature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0;
}

.tradingfeature-card,
.testingfeature-card,
.tutorial-card,
.trading-card,
.testing-card {
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
    }

    h3,
    .percent {
      color: var(--text-primary);
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
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent);
    transition: 0.5s;
  }

  h3,
  .percent {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 600;
    transition: all 0.3s ease;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
  }
}


.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .card-icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    color: var(--primary);
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }
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
