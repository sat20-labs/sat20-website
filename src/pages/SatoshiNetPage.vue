<template>
  <div class="satonet-page">
    <ParticlesBg />
    <div class="container">
      <h1 class="gradient-title">{{ t('satoshinet.title') }}</h1>
      <p class="satoshinet-description">{{ t('satoshinet.subtitle') }}</p>

      <!-- 技术架构详情 -->
      <section class="section architecture">
        <h2 class="section-title">{{ t('satoshinet.architecture.title') }}</h2>
        <div class="feature-list">
          <div v-for="(feature, idx) in tm('satoshinet.architecture.features')" :key="idx" class="feature-item">
            {{ feature }}
          </div>
        </div>

        <!-- 架构图 -->
        <div class="architecture-container">
          <div class="architecture-image">
            <img src="/images/satoshinet/satsnet_eco.png" alt="Satoshinet Architecture" class="centered-arch-image">
          </div>
          <div class="architecture-image">
            <img src="/images/satoshinet/arrow.png" alt="Satoshinet Architecture" class="arrow-image centered-arch-image">
          </div>
          <div class="architecture-image">
            <img src="/images/satoshinet/satsnet_arch.png" alt="Satoshinet Architecture" class="centered-arch-image">
          </div>
        </div>
      </section>

      <!-- 核心优势 -->
      <section class="section advantages">
        <h2 class="section-title">{{ t('satoshinet.advantages.title') }}</h2>
        <div class="advantages-grid">
          <div v-for="(item, idx) in tm('satoshinet.advantages.items')" :key="idx" class="advantage-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 经济模型 -->
      <!-- <section class="section economy">
        <h2 class="section-title">{{ t('satoshinet.economy.title') }}</h2>
        <div class="model-grid">
          <div v-for="(model, idx) in tm('satoshinet.economy.models')"
               :key="idx"
               class="model-card">
            <div class="percent">{{ model.percent }}</div>
            <h3>{{ model.label }}</h3>
            <p>{{ model.desc }}</p>
          </div>
        </div>
      </section> -->

      <!-- 生态发展 -->
      <section class="section ecosystem">
        <h2 class="section-title">{{ t('satoshinet.ecosystem.title') }}</h2>
        <div class="phase-timeline">
          <div v-for="(phase, idx) in tm('satoshinet.ecosystem.phases')" :key="idx" class="phase-card">
            <h3>{{ phase.title }}</h3>
            <ul>
              <li v-for="(item, itemIdx) in phase.items" :key="itemIdx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
//import ParticlesBg from '@/components/common/ParticlesBg.vue'

const { t, tm } = useI18n()
</script>

<style lang="scss" scoped>
.satonet-page {
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

  .gradient-title {
    font-size: 3.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--primary) 0%, var(--neon) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--primary), var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 4rem;
  }

  .satoshinet-description {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
    color: var(--text-secondary);
  }

  .section {
    margin-bottom: 6rem;
    padding: 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #fff;
      text-align: center;
    }
  }

  .feature-list,
  .advantages-grid,
  .model-grid,
  .phase-timeline {
    display: grid;
    gap: 2rem;
  }

  .feature-list {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .advantages-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .model-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .phase-timeline {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .feature-item,
  .advantage-card,
  .model-card,
  .phase-card {
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

  .model-card {
    .percent {
      font-size: 2.5rem;
    }
  }

  .phase-card {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;

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



  .centered-image {
    display: block;
    // margin: 0 auto;
    margin-left: 18%;
    width: 75%;
  }

  @media (max-width: 1024px) {
    .model-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .centered-image {
      display: block;
      margin-left: 1%;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .gradient-title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .model-grid {
      grid-template-columns: 1fr;
    }

    .centered-image {
      display: block;
      margin-left: 5%;
      width: 110%;
    }
  }

 /* 容器布局 */
.architecture-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* 图片之间的间距 */
    width: 100%;
}

/* 左右两侧图片：平均分配剩余宽度 */
.architecture-image:first-child,
.architecture-image:last-child {
    flex: 1; /* 让两侧图片自动平分剩余空间 */
}

/* 中间箭头 */
.arrow-image {
    width: auto; /* 让箭头保持原始尺寸 */
    height: auto;
    max-height: 100px; /* 可根据需求调整 */
}

/* 图片居中 */
.centered-arch-image {
    display: block;
    width: 100%;
    height: auto;
}

/* PC 端：鼠标悬停时放大 */
@media (min-width: 1025px) { 
    .centered-arch-image:hover {
        transform: scale(1.1); /* 放大 30% */
    }
}
/* 适配移动端 */
@media (max-width: 1024px) {
    .architecture-container {
        flex-direction: column; /* 变为纵向排列 */
        align-items: center; /* 确保所有图片在移动端居中 */
    }

    .arrow-image {
        transform: rotate(90deg); /* 旋转箭头 90 度 */
        max-width: 60px; /* 可调整箭头大小，避免过大 */
        height: auto;
        display: block;
        margin: 10px auto; /* 居中对齐 */
    }

    /* 确保所有图片适应屏幕 */
    .architecture-image {
        width: 100%;
    }
}

}
</style>