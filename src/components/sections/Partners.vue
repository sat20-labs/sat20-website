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
    url: 'https://ordx.market',
    highlight: true
  },
  btcname: {
    name: 'BTCName',
    description: t('home.partners.btcname'),
    logo: '/images/partners/btcname.png',
    url: 'https://x.com/btcname_did'
  },
  morego: {
    name: 'Morego',
    description: t('home.partners.morego'),
    logo: '/images/partners/morego.png',
    url: 'http://official.morego.io/'
  },
  // unisat: {
  //   name: 'Unisat',
  //   description: t('home.partners.unisat'),
  //   logo: '/images/partners/unisat.png',
  //   url: 'https://unisat.io'
  // },
  // okx: {
  //   name: 'OKX',
  //   description: t('home.partners.okx'),
  //   logo: '/images/partners/okx.png',
  //   url: 'https://www.okx.com'
  // },
  // magiceden: {
  //   name: 'Magic Eden',
  //   description: t('home.partners.magiceden'),
  //   logo: '/images/partners/magiceden.png',
  //   url: 'https://magiceden.io'
  // }
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

      &::before {
        z-index: 1;  /* 降低伪元素的层级 */
        opacity: 1;
      }

      &::after {
        z-index: 1;  /* 降低伪元素的层级 */
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
    // transform: scale(1.2);
    transition: all 0.3s ease;
    margin-bottom: 1rem; /* 添加底部间距 */
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
    position: relative;  /* 添加相对定位 */
    z-index: 2;         /* 确保链接在伪元素之上 */
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--neon);
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--primary);
      .link-icon {
        transform: translateX(4px);
      }
    }

    .link-icon {
      transition: transform 0.3s ease;
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