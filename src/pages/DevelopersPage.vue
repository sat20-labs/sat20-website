<template>
  <div class="developers-page">
    <ParticlesBg class="particles-container" />
    <div class="container">
      <h1 class="gradient-title">{{ heroTitle }}</h1>
      <p class="subtitle">{{ heroSubtitle }}</p>
      <p class="description">{{ heroDescription }}</p>

      <!-- Documentation Section -->
      <section class="section docs-section">
        <h2 class="section-title">{{ docsTitle }}</h2>
        
        <div class="docs-grid">
          <div v-for="(doc, index) in documentation" 
               :key="index"
               class="doc-card">
            <div class="card-header">
              <component :is="getIconComponent(doc.icon)" class="card-icon" :size="36"/>
              <h3>{{ doc.title }}</h3>
            </div>
            <p class="card-description">{{ doc.description }}</p>
            <a :href="doc.url" class="doc-link" target="_blank">
              {{ t('common.learnMore') }} →
            </a>
          </div>
        </div>
      </section>

      <!-- Tools Section -->
      <section class="section tools-section">
        <h2 class="section-title">{{ toolsTitle }}</h2>
        <div class="tools-grid">         
          <div v-for="(tool, index) in developerTools" 
               :key="index"
               class="tool-card">
            <div class="card-header">
              <component :is="getIconComponent(tool.icon)" class="card-icon" :size="36"/>
              <h3>{{ tool.title }}</h3>
            </div>
            <p class="card-description">{{ tool.description }}</p>
            <a :href="tool.url" class="tool-link" target="_blank">
              {{ t('common.learnMore') }} →
            </a>
          </div>
        </div>
      </section>

      <!-- Updates Section -->
      <section class="section updates-section">
        <h2 class="section-title">{{ updatesTitle }}</h2>
        <div class="updates-grid">
          <div v-for="(update, index) in latestUpdates" 
               :key="index"
               class="update-card">
            <div class="card-header">
              <component :is="getIconComponent(update.icon)" class="card-icon" :size="36"/>
              <span class="update-date">{{ update.date }}</span>
            </div>
            <h3>{{ update.title }}</h3>
            <p class="card-description">{{ update.description }}</p>
          </div>
        </div>
      </section>

      <!-- Community Section -->
      <section class="section community-section">
        <h2 class="section-title">{{ communityTitle }}</h2>
        <div class="community-grid">
          <a v-for="(channel, index) in communityChannels"
             :key="index"
             :href="channel.url"
             class="community-card"
             target="_blank">
             <div class="card-header">
               <component :is="getIconComponent(channel.icon)" class="card-icon" :size="36"/>              
             </div>
             <h3>{{ channel.title }}</h3>
             <p>{{ channel.description }}</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ParticlesBg from '@/components/common/ParticlesBg.vue';

// Icons
import IconRocket from '@/components/icons/developers/IconRocket.vue';
import IconApi from '@/components/icons/developers/IconApi.vue';
import IconStar from '@/components/icons/developers/IconModular.vue';
import IconGraduationCap from '@/components/icons/developers/IconGraduationCap.vue';//

import IconIndexer from '@/components/icons/developers/IconIndexer.vue';
import IconSdk from '@/components/icons/developers/IconSdk.vue';//
import IconTerminal from '@/components/icons/developers/IconTest.vue';
import IconContract from '@/components/icons/developers/IconContract.vue';

import IconBook from '@/components/icons/developers/IconDocument.vue';
import IconCode from '@/components/icons/developers/IconCode.vue';
import IconServer from '@/components/icons/developers/IconServer.vue';

import IconGithub from '@/components/icons/developers/IconGithub.vue';
import IconDiscord from '@/components/icons/developers/IconDiscord.vue';
import IconCommunity from '@/components/icons/developers/IconCommunity.vue';

const { t, tm } = useI18n();

// Hero Section
const heroTitle = computed(() => t('developers.title'));
const heroSubtitle = computed(() => t('developers.subtitle'));
const heroDescription = computed(() => t('developers.description'));

// Documentation Section
const docsTitle = computed(() => t('developers.documentation.title'));
const documentation = computed(() => tm('developers.documentation.categories'));

// Tools Section
const toolsTitle = computed(() => t('developers.tools.title'));
const developerTools = computed(() => tm('developers.tools.items'));

// Updates Section
const updatesTitle = computed(() => t('developers.updates.title'));
const latestUpdates = computed(() => tm('developers.updates.items'));

// Community Section
const communityTitle = computed(() => t('developers.community.title'));
const communityChannels = computed(() => tm('developers.community.channels'));

// Icon mapping function
function getIconComponent(iconName) {
  const iconMap = {    
    'rocket':IconRocket,
    'api': IconApi,
    'star': IconStar,
    'graduation-cap': IconGraduationCap,

    'indexer': IconIndexer,
    'sdk': IconSdk,
    'terminal': IconTerminal,
    'contract': IconContract,

    'code': IconCode,
    'book': IconBook,
    'server': IconServer,
    
    'github': IconGithub,
    'discord': IconDiscord,
    'forum': IconCommunity,
  };
  return iconMap[iconName] || null;
}
</script>

<style lang="scss" scoped>
.developers-page {
  position: relative;
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  color: var(--text-primary);
  background: var(--bg-gradient-dark);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
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

.subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.description {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.section {
  padding: 4rem 0;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--primary), var(--neon));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--primary); /* 兜底颜色，适用于不支持 text-fill 的浏览器 */
  -webkit-text-fill-color: transparent;
}

.docs-grid,
.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 0 auto;
  padding: 0;
}

.updates-grid,
.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0;
}


.doc-card,
.tool-card,
.update-card,
.community-card {
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

      .card-icon {
        transform: scale(1.1);
      }

      h3,
      .percent {
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
      background: linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent);
      transition: 0.5s;
    }

    h3,
    .percent {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
      font-weight: 600;
      transition: all 0.3s ease;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .card-icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    color: var(--primary);
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }
}

.community-grid {
  .card-icon {
    width: 3rem;
    height: 3rem;
  }
}

.card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.doc-link,
.tool-link {
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-top: auto;

  &:hover {
    color: var(--accent);
  }
}

.update-date {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin-left: auto;
}

.community-card {
  text-decoration: none;
  color: var(--text-primary);

  .card-icon {
    width: 3rem;
    height: 3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .gradient-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.25rem;
  }

  .section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .docs-grid,
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
