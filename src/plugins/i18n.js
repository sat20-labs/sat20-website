import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
import zh from '@/locales/zh';

// 开发环境下打印语言包内容
if (import.meta.env.DEV) {
  console.log('Loading language packs:', { en, zh });
}

// 获取当前语言
const currentLang = localStorage.getItem('language') || 'en';

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: currentLang,
  globalInjection: true,
  messages: {
    en,
    zh
  }
});

// 开发环境下添加调试信息
if (import.meta.env.DEV) {
  window.i18n = i18n;
  // 添加热更新支持
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      i18n.global.setLocaleMessage('en', require('@/locales/en').default);
      i18n.global.setLocaleMessage('zh', require('@/locales/zh').default);
    });
  }
  console.log('i18n initialized with locale:', i18n.global.locale.value);
  console.log('Current translations:', {
    zh: i18n.global.t('developers.buttons.startDev', {}, 'zh'),
    en: i18n.global.t('developers.buttons.startDev', {}, 'en')
  });
}

export default i18n;