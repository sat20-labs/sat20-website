<template>
  <section class="hero-section">
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
        <BaseButton secondary @click="goToTestnet">
          {{ t('home.hero.tryTestnet') }}
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
  // 根据当前语言选择对应的白皮书
  const fileName = locale.value === 'zh' ? 'sat20_whitepaper_zh.pdf' : 'sat20_whitepaper_en.pdf';
  const fileUrl = `/documents/whitepaper/${fileName}`;
  
  // 创建一个隐藏的 a 标签来触发下载
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', fileName);
  link.setAttribute('target', '_blank');
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const goToTestnet = () => {
  window.open('https://demo.ordx.market', '_blank', 'noopener,noreferrer');
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
  background-position: bottom center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 768px) {
    background-size: 175%;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    padding-top: 36px; /* 移动端可以稍微小一点 */
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
  margin-top: 1rem; /* 移动端适当增加顶部间距 */
  border-radius: 24px;
  color: var(--text-primary);
  @media (max-width: 1024px) {
    background-size: 200%; /* 放大背景图，仅显示中间部分 */
    background-position: top center; /* 确保背景图顶部对齐，居中 */
    padding: 8rem 2rem 2rem; /* 移动端额外增加顶部间距 */
    min-height: 300px; 
    margin-top: 2rem; /* 移动端适当增加顶部间距 */
  }

  @media (max-width: 768px) {
    background-size: 200%; /* 放大背景图，仅显示中间部分 */
    background-position: top center; /* 确保背景图顶部对齐，居中 */
    padding: 8rem 2rem 2rem; /* 移动端额外增加顶部间距 */
    min-height: 300px; 
    margin-top: 3rem; /* 移动端适当增加顶部间距 */
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
  color: var(--primary); /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
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
</style>