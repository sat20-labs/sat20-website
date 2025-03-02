<template>
  <header class="sticky-header">
    <nav class="container">
      <a href="/" class="logo">
        <img src="@/assets/images/sat20-logo.png" alt="SAT20Labs">
        <span class="logo-text">SAT20Labs</span>
      </a>
      
      <!-- 移动端菜单按钮 -->
      <button class="menu-toggle" 
              :class="{ 'active': isMenuOpen }" 
              @click="toggleMenu"
              aria-label="Toggle menu">
        <svg class="menu-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <line class="menu-line top" x1="3" y1="6" x2="21" y2="6" />
          <line class="menu-line middle" x1="3" y1="12" x2="21" y2="12" />
          <line class="menu-line bottom" x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      
      <!-- 移动端下拉菜单 -->
      <div class="dropdown-menu" :class="{ 'active': isMenuOpen }" :style="{
        background: theme === 'dark' ? 'rgba(13, 13, 13, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)'
      }">
        <div class="dropdown-content">
          <!-- 导航链接 -->
          <div class="dropdown-section">
            <div class="section-title">{{ t('menu.navigation') }}</div>
            <router-link 
              v-for="item in navItems" 
              :key="item.key" 
              :to="item.to"
              class="dropdown-item"
              :class="{ 'active': route.path === item.to }"
              @click="closeMenu">
              {{ t(`nav.${item.key}`) }}
            </router-link>
          </div>
          
          <!-- 角色选择 -->
          <div class="dropdown-section">
            <div class="section-title">{{ t('menu.roles') }}</div>
            <button v-for="role in roles"
                    :key="role.key"
                    class="role-btn"
                    :class="{ 'active': currentRole === role.key }"
                    @click="switchRole(role.key)">
              {{ t(`roles.${role.key}`) }}
            </button>
          </div>
          
          <!-- 设置选项 -->
          <div class="dropdown-section settings">
            <div class="setting-item">
              <span class="setting-label">{{ t('menu.language') }}</span>
              <div class="language-switcher">
                <button v-for="lang in languages"
                        :key="lang.key"
                        class="lang-btn"
                        :class="{ active: locale === lang.key }"
                        @click="switchLang(lang.key)">
                  {{ lang.label }}
                </button>
              </div>
            </div>
            
            <!-- <div class="setting-item">
              <span class="setting-label">{{ t('menu.theme') }}</span>
              <button class="theme-btn" @click="toggleTheme">
                <IconSun v-if="theme === 'dark'" />
                <IconMoon v-else />
              </button>
            </div> -->

          </div>
          <!-- 文档导航 -->
          <div class="dropdown-section">
            <div class="section-title">{{ t('menu.documentation') }}</div>
            <div 
              class="docs-dropdown" 
              @click.stop="toggleDocsMenu"
              :class="{ 'show': showDocsMenu }"
            >
              <button 
                class="docs-button" 
                @click="toggleDocsMenu"
                :class="{ 'active': showDocsMenu }"
              >
                {{ $t('menu.documentation') }}
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="dropdown-menu" v-if="showDocsMenu">
                <router-link 
                  v-for="item in docItems" 
                  :key="item.key"
                  :to="item.to"
                  class="menu-item"
                  @click="handleDocClick(item)"
                >
                  {{ t(`docs.categories.${item.key}`) }}
                </router-link>
                <div v-if="activeDocItem && activeDocItem.submenu" class="submenu">
                  <a 
                    v-for="subitem in activeDocItem.submenu" 
                    :key="subitem.url"
                    :href="subitem.url"
                    class="submenu-item"
                    @click.prevent="handleSubmenuClick(subitem)"
                  >
                    {{ subitem.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 桌面端导航 -->
      <div class="desktop-nav">
        <div class="main-nav">
          <router-link 
            v-for="item in navItems" 
            :key="item.key" 
            :to="item.to"
            class="main-nav-link"
            :class="{ 'active': isMainNavActive && route.path === item.to }">
            {{ t(`nav.${item.key}`) }}
          </router-link>
        </div>
        
        <div class="role-switch">
          <button v-for="role in roles"
                  :key="role.key"
                  class="role-btn"
                  :class="{ 
                    'active': !isMainNavActive && currentRole === role.key,
                    'dimmed': isMainNavActive
                  }"
                  @click="switchRole(role.key)">
            {{ t(`roles.${role.key}`) }}
          </button>
        </div>
        
        <div class="language-switcher">
          <button v-for="lang in languages"
                  :key="lang.key"
                  class="lang-btn"
                  :class="{ active: locale === lang.key }"
                  @click="switchLang(lang.key)">
            {{ lang.label }}
          </button>
        </div>
        
        <!-- <div class="theme-switch">
          <button class="theme-btn" @click="toggleTheme">
            <IconSun v-if="theme === 'dark'" />
            <IconMoon v-else />
          </button>
        </div> -->
        
        <div class="docs-dropdown" v-click-outside="closeDocsMenu">
          <button class="docs-btn" @click="toggleDocsMenu">
            {{ t('menu.documentation') }}
            <span class="arrow-down" :class="{ 'rotated': isDocsMenuOpen }">▼</span>
          </button>
          <div class="docs-menu" v-show="isDocsMenuOpen">
            <template v-for="item in docItems" :key="item.key">
              <a v-if="item.external"
                 :href="item.to"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="docs-link"
                 @click="closeDocsMenu">
                {{ t(`docs.categories.${item.key}`) }}
                <span class="external-icon">↗</span>
              </a>
              <router-link 
                v-else
                :to="item.to"
                class="docs-link"
                :class="{ 'active': route.path === item.to }"
                @click="closeDocsMenu">
                {{ t(`docs.categories.${item.key}`) }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from '@/composables/useTheme';
import { useRoute, useRouter } from 'vue-router';
import IconSun from '@/components/icons/theme/IconSun.vue';
import IconMoon from '@/components/icons/theme/IconMoon.vue';
import i18n from '@/plugins/i18n';

const { t, locale } = useI18n();
const { theme, toggleTheme } = useTheme();
const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);
const currentRole = ref('user');
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
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const switchLang = async (lang) => {
  localStorage.setItem('language', lang);
  i18n.global.locale.value = lang;
  await nextTick();
  closeMenu();
};

const toggleDocsMenu = () => {
  isDocsMenuOpen.value = !isDocsMenuOpen.value;
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
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(12px);
  -webkit-backpack-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  transition: opacity 0.2s ease;
  padding: 4px;
}

.logo:hover {
  opacity: 0.9;
}

.logo img {
  height: 32px;
  width: auto;
  margin-right: 0.75rem;
}

.logo-text {
  font-weight: 700;
  font-size: 1.25rem;
  background: linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.main-nav {
  display: flex;
  gap: 2.5rem;
  margin-right: 2rem;
  align-items: center;
}

.main-nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.01em;
}

.main-nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  opacity: 0.9;
  border-radius: 2px;
}

.main-nav-link:hover {
  color: var(--text-primary);
}

.main-nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.main-nav-link.active {
  color: var(--text-primary);
  font-weight: 700;
}

.main-nav-link.active::after {
  transform: scaleX(1);
}

.role-switch {
  display: flex;
  gap: 1rem;
  margin: 0 1.5rem;
  align-items: center;
}

.role-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.role-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  border-radius: inherit;
}

.role-btn:hover {
  color: var(--text-primary);
}

.role-btn:hover::before {
  opacity: 0.1;
}

.role-btn.active {
  color: var(--text-primary);
  font-weight: 600;
}

.role-btn.active::before {
  opacity: 0.15;
}

.role-btn.dimmed {
  opacity: 0.7;
}

.role-btn.dimmed:hover {
  opacity: 1;
}

.language-switcher {
  display: flex;
  gap: 8px;
  padding: 4px;
  border-radius: 12px;
  background: var(--bg-secondary);
}

.lang-btn {
  padding: 0.25rem 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
}

.lang-btn:hover {
  background: var(--bg-hover);
  border-color: var(--primary-color);
}

.lang-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.theme-btn {
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.theme-btn svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
}

.docs-dropdown {
  position: relative;
  margin-left: 1rem;
  display: inline-block;
}

.docs-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
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
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 200px;
  background: var(--bg-elevated);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backpack-filter: blur(12px);
  z-index: 100;
}

.docs-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.docs-link:hover {
  color: var(--text-primary);
  background: rgba(var(--primary-rgb), 0.1);
}

.docs-link.active {
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.1);
}

.external-icon {
  font-size: 0.875rem;
  margin-left: 0.5rem;
  opacity: 0.7;
}

.submenu {
  border-top: 1px solid var(--border-color);
  margin-top: 0.5rem;
  padding-top: 0.5rem;
}

.submenu-item {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-left: 2px solid transparent;
}

.submenu-item:hover {
  color: var(--primary-color);
  background: var(--bg-hover);
  border-left-color: var(--primary-color);
  padding-left: 1.5rem;
}

.dropdown-menu {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backpack-filter: blur(12px);
}

.dropdown-menu.active {
  display: block;
}

.dropdown-section {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  @media (max-width: 768px) {
    width: 100%; 
  }
}

.section-title {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.dropdown-item {
  display: block;
  padding: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: var(--bg-hover);
}

.dropdown-item.active {
  color: var(--primary-color);
  background-color: var(--active-bg);
}

.role-btn {
  display: block;
  padding: 0.5rem;
  text-align: left;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.role-btn:hover {
  background-color: var(--bg-hover);
}

.role-btn.active {
  color: var(--primary-color);
  background-color: var(--active-bg);
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}

.setting-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.lang-btn {
  padding: 0.25rem 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
}

.lang-btn:hover {
  background: var(--bg-hover);
  border-color: var(--primary-color);
}

.lang-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.theme-btn {
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn:hover {
  background-color: var(--bg-hover);
}

.menu-group {
  position: relative;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background: var(--bg-hover);
}

.menu-item.has-submenu {
  justify-content: space-between;
}

.item-content {
  flex: 1;
  margin: 0 1rem;
}

.item-title {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.item-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.submenu-arrow {
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

.menu-item:hover .submenu-arrow {
  transform: translateX(3px);
}

.submenu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 220px;
  background: var(--bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 100;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.menu-group:hover .submenu {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.submenu-group {
  position: relative;
}

.submenu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.submenu-item:hover {
  color: var(--primary-color);
  background: var(--bg-hover);
}

.submenu-children {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 200px;
  background: var(--bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.submenu-group:hover .submenu-children {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.submenu-child-item {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.submenu-child-item:hover {
  color: var(--primary-color);
  background: var(--bg-hover);
  padding-left: 1.25rem;
}

@media (max-width: 1024px) {
  .container {
    padding: 0.75rem 1.2rem;
  }

  .logo-text {
    display: none;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .main-nav {
    display: flex;
    gap: 0.8rem;
    margin-right: 0.5rem;
    align-items: center;
  }

  .docs-dropdown {
    position: relative;
    margin-left: 0.3rem;
    display: inline-block;
  }

  .docs-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 160px;
    background: var(--bg-elevated);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backpack-filter: blur(12px);
    z-index: 100;
  }

  .role-switch {
    gap: 0.45rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    padding: 0.75rem 1rem;
  }

  .logo img {
    height: 28px;
    margin-right: 0.5rem;
  }

  .logo-text {
    display:block;
  }

  .dropdown-menu {
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .dropdown-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .dropdown-section:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .role-btn,
  .lang-btn {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
    padding: 0.75rem 1rem;
  }

  .setting-item {
    padding: 0.75rem 0;
  }

  .submenu,
  .submenu-children {
    position: static;
    box-shadow: none;
    padding-left: 1rem;
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
  
  .menu-item,
  .submenu-item,
  .submenu-child-item {
    padding: 0.5rem;
  }
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-primary);
  z-index: 1000;
}

.menu-icon {
  width: 24px;
  height: 24px;
  display: block;
  position: relative;
}

.menu-line {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  transform-origin: center;
  transition: all 0.3s ease;
}

/* 菜单关闭动画 */
.menu-toggle.active .menu-line.top {
  transform: translate(0, 6px) rotate(45deg);
}

.menu-toggle.active .menu-line.middle {
  opacity: 0;
  transform: translateX(100%);
}

.menu-toggle.active .menu-line.bottom {
  transform: translate(0, -6px) rotate(-45deg);
}

/* 确保移动端显示 */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>