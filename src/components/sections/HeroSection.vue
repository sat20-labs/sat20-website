<template>
  <section class="hero-section" id="hero">
    <div class="hero-content">
      <h1 class="main-title">
        {{ t('home.hero.mainTitle') }}
        <div class="title-underline"></div>
      </h1>
      <h2 class="subtitle">{{ t('home.hero.subTitle') }}</h2>

      <div class="feature-box">
        <p class="description">{{ t('home.hero.description') }}</p>
      </div>

      <div class="cta-buttons">
        <BaseButton primary @click="downloadWhitepaper">
          {{ t('home.hero.downloadWhitepaper') }}
        </BaseButton>

        <!-- Google Play Wallet Button -->
        <BaseButton secondary class="wallet-btn" @click="goToWalletGooglePlayUrl">
          <img src="/images/hero/google-play.svg" alt="Google Play" class="btn-icon" />
          <span class="lines">
            <span class="main">{{ t('home.hero.downloadWallet') }}</span>
            <span class="sub">{{ t('home.hero.downloadWalletSub') }}</span>
          </span>
        </BaseButton>

        <BaseButton secondary class="wallet-btn" @click="installPwaWallet">
          <img src="/favicon.png" alt="SAT20 Wallet" class="btn-icon" />
          <span class="main">{{ t('home.hero.installPwaWallet') }}</span>
        </BaseButton>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import BaseButton from '@/components/base/BaseButton.vue';

const { t, locale } = useI18n();

const downloadWhitepaper = () => {
  const docsUrl = locale.value === 'zh' ? 'https://docs.sat20.org' : 'https://docs.sat20.org/english';
  window.open(docsUrl, '_blank', 'noopener,noreferrer');
};

const googlePlayUrl = 'https://chromewebstore.google.com/detail/sat20-wallet/dfdlimjfgcjlgghagidokgkdgcdggpjm?hl=zh-CN&utm_source=ext_sidebar';
const pwaWalletUrl = '/pwa/?install=1';



const goToWalletGooglePlayUrl = () => {
  window.open(googlePlayUrl, '_blank', 'noopener,noreferrer');
};

const installPwaWallet = () => {
  window.location.assign(pwaWalletUrl);
};
</script>

<style scoped>
.hero-section {
  min-height: 56vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  background: var(--bg-primary);
  z-index: 1;
  background: url('@/assets/images/hero/sc-bg2.png');
  background-size: auto;
  background-position: top center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 768px) {
    background-size: 150%;
    background-position: top center;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    padding-top: 26px;
    /* 移动端可以稍微小一点 */
  }
}


.hero-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 1;
  /* background: url('@/assets/images/hero/sc-bg1.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat; */
  padding: 4rem;
  margin-top: 1rem;
  /* 移动端适当增加顶部间距 */
  border-radius: 24px;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    background-size: 90%;
    /* 放大背景图，仅显示中间部分 */
    background-position: top center;
    /* 确保背景图顶部对齐，居中 */
    padding: 8rem 2rem 2rem;
    /* 移动端额外增加顶部间距 */
    min-height: 300px;
    margin-top: 2rem;
    /* 移动端适当增加顶部间距 */
  }

  @media (max-width: 768px) {
    background-size: 200%;
    /* 放大背景图，仅显示中间部分 */
    background-position: top center;
    /* 确保背景图顶部对齐，居中 */
    padding: 8rem 2rem 2rem;
    /* 移动端额外增加顶部间距 */
    min-height: 300px;
    margin-top: 3rem;
    /* 移动端适当增加顶部间距 */
  }
}

.main-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--primary);
  /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

.wallet-lines {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}

.wallet-lines .sub {
  font-size: 0.82em;
  opacity: 0.85;
  margin-top: 2px;
}

.wallet-btn {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wallet-btn .btn-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.wallet-btn .lines {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  align-items: flex-start;
}

.wallet-btn .lines .main {
  font-weight: 500;
}

.wallet-btn .lines .sub {
  font-size: 0.72em;
  opacity: 0.85;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .wallet-btn {
    justify-content: center;
  }
}
</style>
