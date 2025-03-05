<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="@/assets/images/sat20-logo.png" alt="SAT20Labs" />
          <span class="logo-text">SAT20Labs</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <div class="main-nav">
            <router-link v-for="item in navItems" :key="item.key" :to="item.to" class="main-nav-link"
              :class="{ 'active': isMainNavActive && route.path === item.to }">
              {{ t(`nav.${item.key}`) }}
            </router-link>
          </div>

          <div class="role-switch">
            <button v-for="role in roles" :key="role.key" class="role-btn" :class="{
              'active': !isMainNavActive && currentRole === role.key,
              'dimmed': isMainNavActive
            }" @click="switchRole(role.key)">
              {{ t(`roles.${role.key}`) }}
            </button>
          </div>

          <div class="language-switcher">
            <button v-for="lang in languages" :key="lang.key" class="lang-btn" :class="{ active: locale === lang.key }"
              @click="switchLang(lang.key)">
              {{ lang.label }}
            </button>
          </div>

          <div class="desktop-docs-container">
            <div class="docs-dropdown" v-click-outside="closeDocsMenu">
              <button class="docs-btn" @click="toggleDocsMenu">
                {{ t('menu.documentation') }}
                <span class="arrow-down" :class="{ 'rotated': isDocsMenuOpen }">▼</span>
              </button>
              <div class="docs-menu" v-show="isDocsMenuOpen">
                <template v-for="item in docItems" :key="item.key">
                  <a v-if="item.external" :href="item.to" target="_blank" rel="noopener noreferrer" class="docs-link"
                    @click="closeDocsMenu">
                    {{ t(`docs.categories.${item.key}`) }}
                    <span class="external-icon">↗</span>
                  </a>
                  <router-link v-else :to="item.to" class="docs-link" :class="{ 'active': route.path === item.to }"
                    @click="closeDocsMenu">
                    {{ t(`docs.categories.${item.key}`) }}
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="6" x2="20" y2="6" class="menu-line top" />
            <line x1="4" y1="12" x2="20" y2="12" class="menu-line middle" />
            <line x1="4" y1="18" x2="20" y2="18" class="menu-line bottom" />
          </svg>
        </button>

        <!-- Mobile Dropdown Menu -->
        <div class="dropdown-menu" :class="{ active: isMenuOpen }">
          <div class="dropdown-content">
            <!-- Mobile Navigation Items -->
            <div class="dropdown-section">
              <router-link 
                v-for="item in navItems" 
                :key="item.key" 
                :to="item.to" 
                class="menu-item"
                @click="closeMenu"
              >
                {{ t(`nav.${item.key}`) }}
              </router-link>
            </div>

            <!-- Mobile Docs Menu -->
            <div class="dropdown-section">
              <button class="menu-item" @click="showDocsMenu = !showDocsMenu">
                {{ t('menu.documentation') }}
                <span class="icon" :class="{ 'is-active': showDocsMenu }">▼</span>
              </button>
              <div v-show="showDocsMenu" class="submenu">
                <router-link
                  v-for="doc in docItems"
                  :key="doc.key"
                  :to="doc.to"
                  class="submenu-item"
                  @click="closeMenu"
                >
                  {{ t(`docs.categories.${doc.key}`) }}
                </router-link>
              </div>
            </div>

            <!-- Mobile Settings -->
            <div class="dropdown-section">
              <div class="setting-item">
                <button 
                  v-for="role in roles"
                  :key="role.key"
                  class="role-btn"
                  :class="{ active: currentRole === role.key && !isMainNavActive }"
                  @click="switchRole(role.key)"
                >
                  {{ t(`roles.${role.key}`) }}
                </button>
              </div>
              <div class="setting-item">
                <button
                  v-for="lang in languages"
                  :key="lang.key"
                  class="lang-btn"
                  :class="{ active: locale === lang.key }"
                  @click="switchLang(lang.key)"
                >
                  {{ lang.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from '@/composables/useTheme';
import { useRoute, useRouter } from 'vue-router';
import i18n from '@/plugins/i18n';

const { t, locale } = useI18n();
const { theme, toggleTheme } = useTheme();
const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);
const currentRole = ref(null);
const isDocsMenuOpen = ref(false);
const showDocsMenu = ref(false);
const activeDocItem = ref(null);

const languages = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'EN' }
];

const navItems = [
  { key: 'home', to: '/' },
  { key: 'tech', to: '/tech' },
  { key: 'satnet', to: '/satnet' },
  { key: 'eco', to: '/eco' },
  { key: 'roadmap', to: '/roadmap' }
];

const docItems = [
  { key: 'whitepaper', to: '/docs/whitepaper' },
  { key: 'getting_started', to: '/docs/getting_started' },
  { key: 'api_reference', to: '/docs/api_reference' },
  { key: 'contributing', to: '/docs/contributing' }
];

const explorerUrl = computed(() => {
  return locale.value === 'zh' ? 'https://app.sat20.org/#/explorer' : 'https://app.sat20.org/#/explorer?language=en';
});

const roles = [
  {
    key: 'explorer',
    to: explorerUrl
  },
  { key: 'developer', to: '/developers' },
  { key: 'user', to: '/user' }
];

const isMainNavActive = computed(() => {
  return navItems.some(item => route.path === item.to);
});

const switchRole = (role) => {
  currentRole.value = role;
  const selectedRole = roles.find(r => r.key === role);
  if (selectedRole && selectedRole.to) {
    // Handle both computed refs and direct string URLs
    const url = selectedRole.to.value || selectedRole.to;
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(url);
    }
  }
  closeMenu();
};

const closeMenu = () => {
  isMenuOpen.value = false;
  showDocsMenu.value = false;
};

const toggleMenu = () => {
  //console.log('Toggle menu clicked, current:', isMenuOpen.value);
  isMenuOpen.value = !isMenuOpen.value;
  //console.log('After toggle:', isMenuOpen.value);
};

const switchLang = async (lang) => {
  localStorage.setItem('language', lang);
  i18n.global.locale.value = lang;
  await nextTick();
  closeMenu();
};

const toggleDocsMenu = () => {
  if (window.innerWidth < 768) {
    showDocsMenu.value = !showDocsMenu.value;
  } else {
    isDocsMenuOpen.value = !isDocsMenuOpen.value;
  }
};

const closeDocsMenu = () => {
  isDocsMenuOpen.value = false;
};

const handleDocClick = (item) => {
  activeDocItem.value = item;
  showDocsMenu.value = false;

  // 处理导航
  if (item.to) {
    const [path, hash] = item.to.split('#');
    router.push(path).then(() => {
      if (hash) {
        scrollToAnchor(hash);
      }
    });
  }

  closeMenu();
};

const handleSubmenuClick = (subitem) => {
  showDocsMenu.value = false

  // 解析URL和锚点
  const [path, hash] = subitem.url.split('#')

  // 如果已经在文档页面，直接滚动到锚点
  if (router.currentRoute.value.path === path) {
    scrollToAnchor(hash)
  } else {
    // 否则先导航到文档页面，然后滚动到锚点
    router.push(path).then(() => {
      setTimeout(() => scrollToAnchor(hash), 100)
    })
  }
};

const scrollToAnchor = (hash) => {
  if (!hash) return
  const element = document.getElementById(hash)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
};

// 点击外部关闭菜单
const handleClickOutside = (event) => {
  const menu = document.querySelector('.dropdown-menu');
  const toggle = document.querySelector('.menu-toggle');
  if (isMenuOpen.value && menu && toggle && 
      !menu.contains(event.target) && 
      !toggle.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// 添加 v-click-outside 指令
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

// 注册指令
const directives = {
  'click-outside': vClickOutside
};
</script>

<style scoped>
/* 基础样式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-primary);
  padding: 4px;
}

.logo img {
  height: 32px;
  width: auto;
}

.logo-text {
  font-weight: 600;
  font-size: 1.25rem;
  background: linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 桌面端导航样式 */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.main-nav-link {
  position: relative;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0;
}

.main-nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.main-nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.main-nav-link.active::after {
  transform: scaleX(1);
}

.role-switch {
  display: flex;
  gap: 0.125rem;  /* 进一步减小间距 */
  padding: 2px;  /* 减小内边距 */
  background: var(--bg-secondary);
  border-radius: 4px;  /* 稍微减小圆角 */
  margin: 0 0.75rem;  /* 添加左右间距 */
}

.role-btn {
  padding: 0.25rem 0.375rem;  /* 调整内边距 */
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 3px;  /* 稍微减小圆角 */
  transition: all 0.3s ease;
  font-size: 0.875rem;
  white-space: nowrap;  /* 防止文字换行 */
}

.role-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.role-btn.active {
  color: var(--text-primary);
  background: var(--bg-active);
}

.role-btn.dimmed {
  opacity: 0.6;
}

.language-switcher {
  display: flex;
  gap: 0.5rem;
  padding: 4px;
  background: var(--bg-secondary);
  border-radius: 6px;
}

.lang-btn {
  padding: 0.25rem 0.75rem;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.lang-btn.active {
  color: var(--text-primary);
  background: var(--primary-color);
}

.docs-dropdown {
  position: relative;
}

.docs-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.docs-btn:hover {
  color: var(--text-primary);
}

.arrow-down {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.arrow-down.rotated {
  transform: rotate(180deg);
}

.docs-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 240px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.docs-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.docs-link:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.docs-link.active {
  color: var(--primary-color);
  background: var(--bg-active);
}

.external-icon {
  margin-left: 0.5rem;
  opacity: 0.7;
}

/* 移动端样式 */
@media screen and (max-width: 768px) {
  .container {
    padding: 0.5rem 1rem;
  }

  .desktop-nav {
    display: none !important;
  }

  .menu-toggle {
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 102;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
  }

  /* 桌面端菜单默认按钮样式 */
  .menu-line {
    stroke: var(--text-primary);
    stroke-width: 2;
    transition: all 0.3s ease;
  }

  /* 移动端菜单关闭按钮样式 */
  .menu-toggle.active .menu-line.top {
    transform: translateY(-7px) translateX(10px) rotate(45deg);
  }

  .menu-toggle.active .menu-line.middle {
    opacity: 0;
  }

  .menu-toggle.active .menu-line.bottom {
    transform: translateY(2px) translateX(-7px) rotate(-45deg);
  }

  .dropdown-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-primary);
    opacity: 0.85;
    z-index: 101;
    padding-top: 64px;
  }

  .dropdown-menu.active {
    display: block;
  }

  .dropdown-content {
    height: 100%;
    overflow-y: auto;
    padding: 1rem;
  }

  .dropdown-section {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .dropdown-section:last-child {
    border-bottom: none;
  }

  .role-switch {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1rem;
  }

  .language-switcher {
    margin-top: 1rem;
  }

  .menu-item {
    display: block;
    width: 100%;
    padding: 0.75rem;
    text-align: left;
    color: var(--text-primary);
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;   
  }

  .submenu {
    padding-left: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .submenu-item {
    display: block;    
    padding: 0.75rem;
    color: var(--text-primary);
    text-decoration: none;
  }

  .role-btn,
  .lang-btn {
    display: block;
    width: 100%;
    padding: 0.75rem;
    text-align: left;
    color: var(--text-primary);
    border: none;
    background: none;
    cursor: pointer;
  }

  .role-btn.active,
  .lang-btn.active {
    color: var(--primary-color);
    background: var(--bg-active);
  }

  .setting-item {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .setting-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .role-btn {
    display: block;
    width: 100%;
    padding: 0.75rem;
    text-align: left;
    color: var(--text-primary);
    border: none;
    background: none;
    cursor: pointer;
  }

  .lang-btn {
    padding: 0.5rem 1rem;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: 4px;
  }
}

/* 桌面端样式 */
@media screen and (min-width: 769px) {
  .menu-toggle,
  .dropdown-menu {
    display: none !important;
  }

  .desktop-nav {
    display: flex !important;
    align-items: center;
    gap: 2rem;
  }
}
</style>