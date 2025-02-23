import { ref, onMounted, watch } from 'vue';

const THEME_KEY = 'preferred-theme';
const preferredTheme = ref('dark'); // 默认深色主题

export function useTheme() {
  const setTheme = (theme) => {
    preferredTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  };

  const toggleTheme = () => {
    const newTheme = preferredTheme.value === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const initTheme = () => {
    // 检查本地存储
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 检查系统偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  };

  onMounted(() => {
    initTheme();
  });

  return {
    theme: preferredTheme,
    toggleTheme,
    setTheme
  };
} 