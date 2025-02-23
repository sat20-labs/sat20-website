<template>
  <section class="partners-section">
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-description">{{ description }}</p>
    <div class="partners-grid">
      <div v-for="(partner, key) in partners" 
           :key="key" 
           class="partner-card"
           :class="{ 'highlight': partner.highlight }">
        <div class="partner-logo">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
        <div class="partner-info">
          <h3>{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
        </div>
        <a :href="partner.url" target="_blank" class="partner-link">
          <span class="link-text">访问</span>
          <span class="link-icon">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const title = computed(() => t('home.partners.title'));
const description = computed(() => t('home.partners.description'));

const partners = computed(() => ({
  sat20market: {
    name: 'SAT20Market',
    description: t('home.partners.sat20market'),
    logo: '/images/partners/sat20market.png',
    url: 'https://sat20.market',
    highlight: true
  },
  btcname: {
    name: 'BTCName',
    description: t('home.partners.btcname'),
    logo: '/images/partners/btcname.png',
    url: 'https://btc.name'
  },
  unisat: {
    name: 'Unisat',
    description: t('home.partners.unisat'),
    logo: '/images/partners/unisat.png',
    url: 'https://unisat.io'
  },
  okx: {
    name: 'OKX',
    description: t('home.partners.okx'),
    logo: '/images/partners/okx.png',
    url: 'https://www.okx.com'
  },
  magiceden: {
    name: 'Magic Eden',
    description: t('home.partners.magiceden'),
    logo: '/images/partners/magiceden.png',
    url: 'https://magiceden.io'
  }
}));
</script>

<style lang="scss" scoped>
.partners-section {
  padding: 6rem 0;
  background: var(--bg-primary);

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-description {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    color: var(--text-secondary);
  }

  .partners-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .partner-card {
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
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

      .partner-logo {
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

  .partner-logo {
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

  .partner-info {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
      font-weight: 600;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }

  .partner-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }

    .link-text {
      margin-right: 0.5rem;
    }

    .link-icon {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .section-title {
      font-size: 2rem;
    }

    .partners-grid {
      grid-template-columns: 1fr;
      padding: 0 1rem;
      gap: 1.5rem;
    }
  }
}
</style>