import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

const i18n = createI18n({
  locale: 'en',  // 默认语言
  messages: {
    en,
    zh
  }
});

export default i18n;
