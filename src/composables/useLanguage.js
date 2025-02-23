import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export function useLanguage() {
  const { locale } = useI18n();
  const currentLang = ref(localStorage.getItem('language') || 'zh');

  const switchLanguage = (lang) => {
    currentLang.value = lang;
    locale.value = lang;
    localStorage.setItem('language', lang);
    
    // 添加语言切换的过渡效果
    document.body.setAttribute('data-i18n-transition', 'fade');
    setTimeout(() => {
      document.body.removeAttribute('data-i18n-transition');
    }, 200);
  };

  return {
    currentLang,
    switchLanguage
  };
} 