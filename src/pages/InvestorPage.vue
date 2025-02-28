<template>
  <div class="investor-page">
    <ParticlesBg />
    <div class="container">
      <h1 class="gradient-title">{{ t('investor.title') }}</h1>
      <p class="subtitle">{{ t('investor.subtitle') }}</p>

      <!-- Token Usage Section -->
      <section class="info-section">
        <h2 class="section-title">{{ t('investor.tokenUsage.title') }}</h2>
        <div class="info-card pearl-card">
          <IconPearl class="card-icon" />
          <div class="card-content">
            <h3>Pearl</h3>
            <p>{{ t('investor.tokenUsage.pearl') }}</p>
          </div>
        </div>
      </section>

      <!-- Transaction Fee Section -->
      <section class="info-section">
        <h2 class="section-title">{{ t('investor.transactionFee.title') }}</h2>
        <div class="info-card fee-card">
          <IconFee class="card-icon" />
          <div class="card-content">
            <p>{{ t('investor.transactionFee.current') }}</p>
            <div class="fee-progress">
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
              <div class="fee-labels">
                <span>10聪</span>
                <span>1聪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Revenue Distribution Section -->
      <section class="info-section">
        <h2 class="section-title">{{ t('investor.revenue.title') }}</h2>
        <div class="cards-grid">
          <div class="info-card mining-card">
            <IconMining class="card-icon" />
            <div class="card-content">
              <h3>{{ t('investor.revenue.mining.title') }}</h3>
              <p>{{ t('investor.revenue.mining.description') }}</p>
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-label">{{ t('investor.revenue.mining.phase1') }}</span>
                  <span class="stat-value">40%</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ t('investor.revenue.mining.phase2') }}</span>
                  <span class="stat-value">50%</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ t('investor.revenue.mining.phase3') }}</span>
                  <span class="stat-value">60%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card liquidity-card">
            <IconLiquidity class="card-icon" />
            <div class="card-content">
              <h3>{{ t('investor.revenue.liquidity.title') }}</h3>
              <p>{{ t('investor.revenue.liquidity.description') }}</p>
              <div class="apy-display">
                <span class="apy-value">15-30%</span>
                <span class="apy-label">APY</span>
              </div>
            </div>
          </div>

          <div class="info-card foundation-card">
            <IconFoundation class="card-icon" />
            <div class="card-content">
              <h3>{{ t('investor.revenue.foundation.title') }}</h3>
              <p>{{ t('investor.revenue.foundation.description') }}</p>
              <div class="phase-progress">
                <div class="phase-item">
                  <span class="phase-label">{{ t('investor.revenue.foundation.early') }}</span>
                  <span class="phase-value">20%</span>
                </div>
                <div class="phase-arrow">→</div>
                <div class="phase-item">
                  <span class="phase-label">{{ t('investor.revenue.foundation.growth') }}</span>
                  <span class="phase-value">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dynamic Adjustment Section -->
      <section class="info-section">
        <h2 class="section-title">{{ t('investor.adjustment.title') }}</h2>
        <div class="cards-grid">
          <div class="info-card network-card">
            <IconNetwork class="card-icon" />
            <div class="card-content">
              <h3>{{ t('investor.adjustment.network.title') }}</h3>
              <p>{{ t('investor.adjustment.network.description') }}</p>
            </div>
          </div>

          <div class="info-card staking-card">
            <IconStaking class="card-icon" />
            <div class="card-content">
              <h3>{{ t('investor.adjustment.staking.title') }}</h3>
              <p>{{ t('investor.adjustment.staking.description') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ParticlesBg from '@/components/ParticlesBg.vue';
import IconPearl from '@/components/icons/investor/IconPearl.vue';
import IconFee from '@/components/icons/investor/IconFee.vue';
import IconMining from '@/components/icons/investor/IconMining.vue';
import IconLiquidity from '@/components/icons/investor/IconLiquidity.vue';
import IconFoundation from '@/components/icons/investor/IconFoundation.vue';
import IconNetwork from '@/components/icons/investor/IconNetwork.vue';
import IconStaking from '@/components/icons/investor/IconStaking.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.investor-page {
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
    text-align: center;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 2rem;
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
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .info-section {
    margin-bottom: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #fff;
      text-align: center;
    }
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .info-card {
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

    .card-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
      color: var(--primary);
    }

    .card-content {
      h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
      }

      p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
    }

    .stats {
      .stat-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        
        .stat-label {
          color: var(--text-secondary);
        }
        
        .stat-value {
          color: var(--primary);
          font-weight: 600;
        }
      }
    }

    .apy-display {
      text-align: center;
      margin-top: 1rem;
      
      .apy-value {
        font-size: 2rem;
        color: var(--primary);
        font-weight: 600;
      }
      
      .apy-label {
        color: var(--text-secondary);
        margin-left: 0.5rem;
      }
    }

    .phase-progress {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;

      .phase-item {
        text-align: center;

        .phase-label {
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .phase-value {
          color: var(--primary);
          font-weight: 600;
          font-size: 1.25rem;
        }
      }

      .phase-arrow {
        color: var(--text-secondary);
        font-size: 1.5rem;
      }
    }

    .fee-progress {
      margin-top: 1rem;

      .progress-bar {
        height: 8px;
        background: var(--card-border);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.5rem;

        .progress-fill {
          height: 100%;
          width: 60%;
          background: linear-gradient(90deg, var(--primary), var(--neon));
          border-radius: 4px;
        }
      }

      .fee-labels {
        display: flex;
        justify-content: space-between;
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .gradient-title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .info-section {
      margin-bottom: 3rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }

    .info-card {
      padding: 1.5rem;

      .card-content {
        h3 {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
