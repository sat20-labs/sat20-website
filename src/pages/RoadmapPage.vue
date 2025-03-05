<template>
  <div class="roadmap-page">
    <ParticlesBg />
    <div class="container">
      <h1 class="gradient-text">{{ t('roadmap.title') }}</h1>
      <p class="subtitle">{{ t('roadmap.subtitle') }}</p>
      <Roadmap />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Roadmap from '@/components/sections/Roadmap.vue';
import ParticlesBg from '@/components/ParticlesBg.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.roadmap-page {
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  color: var(--text-primary);
  background: var(--bg-gradient-dark);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  .gradient-text {
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
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  :deep(.roadmap-card) {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 2rem;

    &:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
      border-color: var(--card-hover-border);
      box-shadow: 0 10px 30px var(--shadow-color);

      h3 {
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
      padding: 1px;
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

    h3 {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        line-height: 1.6;
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .gradient-text {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    :deep(.roadmap-card) {
      padding: 1.5rem;

      h3 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>