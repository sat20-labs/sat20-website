<template>
  <div class="tokenomics-page">
    <!-- 主视觉区域 -->
    <div class="hero-section">
      <div class="container">
        <h1 class="gradient-title">{{ t('tokenomics.hero.title') }}</h1>
        <p class="subtitle">{{ t('tokenomics.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container main-content">
      <!-- 参与方式网格 -->
      <div class="participation-grid">
        <!-- 资产发行 -->
        <div class="grid-card">
          <div class="card-icon">
            <IconToken />
          </div>
          <h2>{{ t('tokenomics.assetIssuance.title') }}</h2>
          <p>{{ t('tokenomics.assetIssuance.description') }}</p>
          <div class="features">
            <div class="feature-item" v-for="(feature, idx) in tm('tokenomics.assetIssuance.features')" :key="idx">
              <span class="feature-icon">•</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/docs/sat20' }" class="learn-more">
            {{ t('common.learnMore') }}
            <IconArrowRight class="arrow-icon" />
          </router-link>
        </div>

        <!-- 参与交易 -->
        <div class="grid-card">
          <div class="card-icon">
            <IconTrade />
          </div>
          <h2>{{ t('tokenomics.trading.title') }}</h2>
          <p>{{ t('tokenomics.trading.description') }}</p>
          <div class="features">
            <div class="feature-item" v-for="(feature, idx) in tm('tokenomics.trading.features')" :key="idx">
              <span class="feature-icon">•</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/docs/stp' }" class="learn-more">
            {{ t('common.learnMore') }}
            <IconArrowRight class="arrow-icon" />
          </router-link>
        </div>

        <!-- 社区参与 -->
        <div class="grid-card">
          <div class="card-icon">
            <IconCommunity />
          </div>
          <h2>{{ t('tokenomics.community.title') }}</h2>
          <p>{{ t('tokenomics.community.description') }}</p>
          <div class="features">
            <div class="feature-item" v-for="(feature, idx) in tm('tokenomics.community.features')" :key="idx">
              <span class="feature-icon">•</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/community' }" class="learn-more">
            {{ t('common.learnMore') }}
            <IconArrowRight class="arrow-icon" />
          </router-link>
        </div>

        <!-- 开发者支持 -->
        <div class="grid-card">
          <div class="card-icon">
            <IconDeveloper />
          </div>
          <h2>{{ t('tokenomics.developer.title') }}</h2>
          <p>{{ t('tokenomics.developer.description') }}</p>
          <div class="features">
            <div class="feature-item" v-for="(feature, idx) in tm('tokenomics.developer.features')" :key="idx">
              <span class="feature-icon">•</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/docs/developer' }" class="learn-more">
            {{ t('common.learnMore') }}
            <IconArrowRight class="arrow-icon" />
          </router-link>
        </div>
      </div>

      <!-- 侧边栏 -->
      <aside class="sidebar">
        <div class="sidebar-section">
          <h3>{{ t('tokenomics.sidebar.announcements') }}</h3>
          <ul>
            <li v-for="(item, idx) in tm('tokenomics.sidebar.announcementList')" :key="idx">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>

        <div class="sidebar-section">
          <h3>{{ t('tokenomics.sidebar.resources') }}</h3>
          <ul>
            <li v-for="(item, idx) in tm('tokenomics.sidebar.resourceList')" :key="idx">
              <a :href="item.link" target="_blank" rel="noopener">{{ item.title }}</a>
            </li>
          </ul>
        </div>

        <!-- 订阅表单 -->
        <div class="newsletter-section">
          <h3>{{ t('tokenomics.newsletter.title') }}</h3>
          <p>{{ t('tokenomics.newsletter.description') }}</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              type="email" 
              v-model="email" 
              :placeholder="t('tokenomics.newsletter.placeholder')"
              required
            >
            <button type="submit">{{ t('tokenomics.newsletter.subscribe') }}</button>
          </form>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import '@/assets/styles/pages/_tokenomics.scss'
import IconToken from '@/components/icons/sections/IconToken.vue'
import IconTrade from '@/components/icons/sections/IconTrade.vue'
import IconCommunity from '@/components/icons/sections/IconCommunity.vue'
import IconDeveloper from '@/components/icons/sections/IconDeveloper.vue'
import IconArrowRight from '@/components/icons/sections/IconArrowRight.vue'

const { t, tm } = useI18n()
const email = ref('')

const subscribeNewsletter = async () => {
  // TODO: Implement newsletter subscription
  console.log('Subscribe:', email.value)
}
</script>

<style lang="scss" scoped>
// 样式已移至 @/assets/styles/pages/_tokenomics.scss
</style>