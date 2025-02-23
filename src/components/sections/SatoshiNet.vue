<template>
  <section class="satonet-section">
    <div class="container">
      <!-- 技术架构 -->
      <div class="architecture">
        <h2 class="gradient-title">{{ title }}</h2>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="tech-grid">
          <div v-for="(feature, idx) in features" 
               :key="idx"
               class="tech-item">
            <div class="tech-icon" :class="`icon-${idx + 1}`">
              <component :is="techIcons[idx]" :size="iconSize" />
            </div>
            <p>{{ feature }}</p>
          </div>
        </div>
      </div>

      <!-- 兼容协议 -->
      <div class="compatibility">
        <h3>{{ t('home.satoshinet.compatibility.title') }}</h3>
        <div class="protocol-grid">
          <div v-for="(protocol, idx) in protocols" 
               :key="idx" 
               class="protocol-card">
            <span class="protocol-name">{{ protocol }}</span>
          </div>
        </div>
      </div>

      <!-- 资产类型 -->
      <div class="assets">
        <h3>{{ t('home.satoshinet.assetTypes.title') }}</h3>
        <div class="asset-grid">
          <div v-for="(type, key) in assetTypes" 
               :key="key" 
               class="asset-card">
            <div class="asset-icon" :class="key">
              <span>{{ key.toUpperCase() }}</span>
            </div>
            <div class="asset-info">
              <h4>{{ t(`home.satoshinet.assetTypes.types.${key}.title`) }}</h4>
              <p>{{ t(`home.satoshinet.assetTypes.types.${key}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import IconBitcoin from '@/components/icons/sections/IconBitcoin.vue'
import IconLightning from '@/components/icons/sections/IconLightning.vue'
import IconLock from '@/components/icons/sections/IconLock.vue'
import IconShield from '@/components/icons/sections/IconShield.vue'

const { t, tm } = useI18n()

const techIcons = [IconBitcoin, IconLightning, IconLock, IconShield]

const features = computed(() => [
  t('home.satoshinet.architecture.feature1'),
  t('home.satoshinet.architecture.feature2'),
  t('home.satoshinet.architecture.feature3'),
  t('home.satoshinet.architecture.feature4')
])

const title = computed(() => t('home.satoshinet.title'))
const subtitle = computed(() => t('home.satoshinet.subtitle'))
const description = computed(() => t('home.satoshinet.description'))
const layers = computed(() => tm('home.satoshinet.architecture.layers.items'))
const protocols = computed(() => tm('home.satoshinet.compatibility.protocols'))
const assetTypes = computed(() => tm('home.satoshinet.assetTypes.types'))

const iconSize = 32
</script>

<style lang="scss" scoped>
.satonet-section {
  padding: 6rem 0;
  background: var(--bg-primary);
  color: var(--text-primary);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .gradient-title {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    text-align: center;
  }

  .subtitle {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  // 技术架构网格
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .tech-item {
    padding: 2rem;
    text-align: center;
    border-radius: 20px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      .tech-icon {
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

  .tech-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  // 协议卡片
  .protocol-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 2rem 0 4rem;
  }

  .protocol-card {
    padding: 2rem;
    text-align: center;
    border-radius: 20px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      .protocol-name {
        transform: scale(1.1);
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

    .protocol-name {
      font-weight: 600;
      font-size: 1.4rem;
      background: linear-gradient(135deg, var(--primary), var(--neon));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: transform 0.3s ease;
    }
  }

  .protocol-desc {
    margin-top: 1rem;
    color: var(--text-secondary);
  }

  .asset-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
    border-radius: 20px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      .asset-icon {
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

  .asset-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;

    span {
      font-weight: 600;
      font-size: 1rem;
      background: linear-gradient(135deg, var(--primary), var(--neon));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .asset-info {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }

  .asset-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: 2rem 0 4rem;
  }

  @media (max-width: 1024px) {
    .asset-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .gradient-title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .tech-grid,
    .protocol-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .asset-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .tech-icon,
    .asset-icon {
      width: 40px;
      height: 40px;
    }

    .protocol-card .protocol-name {
      font-size: 1.2rem;
    }
  }
}
</style>