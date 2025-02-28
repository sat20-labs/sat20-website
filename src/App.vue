<template>
  <div id="app" :data-theme="theme">
    <ParticlesBg v-if="$route.name === 'home'" />
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from '@/composables/useTheme';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import ParticlesBg from '@/components/common/ParticlesBg.vue';

const { theme } = useTheme();
const { locale } = useI18n();

// 监听语言变化，添加过渡效果
watch(locale, () => {
  document.body.setAttribute('data-i18n-transition', 'fade');
  setTimeout(() => {
    document.body.removeAttribute('data-i18n-transition');
  }, 200);
});
</script>

<style>
@import '@/assets/styles/global.css';
@import '@/assets/styles/theme.css';
@import '@/assets/styles/variables.css';

/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
}

main {
  flex: 1;
  width: 100%;
  position: relative;
}

/* 页面过渡动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* 语言切换过渡 */
[data-i18n-transition="fade"] {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>