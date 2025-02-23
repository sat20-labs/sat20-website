<template>
  <section class="developer-section">
    <div class="container">
      <div class="content">
        <h2 class="title gradient-text">{{ title }}</h2>
        <p class="description">{{ subtitle }}</p>
        <p class="description">{{ description }}</p>
        <div class="cta-buttons">
          <BaseButton primary @click="goToDevelopers">
            {{ startDevText }}
            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M3 8h8M8 4l4 4-4 4" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </BaseButton>
          <BaseButton secondary @click="goToDocs">
            {{ viewDocsText }}
          </BaseButton>
        </div>
      </div>
      <div class="visual">
        <div class="code-window">
          <div class="window-header">
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="filename">example.js</span>
          </div>
          <pre class="code-content">
<code>import { ORDX } from '@sat20/ordx';

// Initialize ORDX client
const ordx = new ORDX({
  network: 'testnet',
  apiKey: process.env.API_KEY
});

// Create a new order
const order = await ordx.createOrder({
  tokenId: 'sat20_1234',
  amount: 1000,
  price: 0.01
});

console.log('Order created:', order.id);</code>
          </pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BaseButton from '@/components/base/BaseButton.vue';

const router = useRouter();
const { t } = useI18n();

// 使用computed属性来处理翻译
const title = computed(() => t('home.developers.title'));
const subtitle = computed(() => t('home.developers.subtitle'));
const description = computed(() => t('home.developers.description'));
const startDevText = computed(() => t('home.developers.buttons.startDev'));
const viewDocsText = computed(() => t('home.developers.buttons.viewDocs'));

const goToDevelopers = () => {
  router.push('/developers');
};

const goToDocs = () => {
  router.push('/docs');
};
</script>

<style scoped>
.developer-section {
  padding: 6rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.content {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-align: left;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  margin-top: 1rem;
}

.arrow-icon {
  margin-left: 8px;
  vertical-align: middle;
}

/* Code window styles */
.code-window {
  background: var(--code-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.window-header {
  background: var(--window-header);
  padding: 12px;
  display: flex;
  align-items: center;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--dot-color);
}

.dots span:nth-child(1) { background: #FF5F56; }
.dots span:nth-child(2) { background: #FFBD2E; }
.dots span:nth-child(3) { background: #27C93F; }

.filename {
  margin-left: 12px;
  color: var(--text-secondary);
  font-size: 14px;
}

.code-content {
  padding: 20px;
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: var(--code-text);
  overflow-x: auto;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .content {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .code-window {
    margin: 0 -20px;
    border-radius: 0;
  }
}
</style>
