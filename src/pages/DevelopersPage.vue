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
              <component :is="getIconComponent(doc.icon)" class="card-icon" />
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
          <div class="tool-card">
            <div class="card-header">
              <component :is="getIconComponent('indexer')" class="card-icon" />
              <h3>{{ indexerTitle }}</h3>
            </div>
            <p class="card-description">{{ indexerDescription }}</p>
            <a href="https://github.com/sat20-labs/indexer" 
               class="tool-link" 
               target="_blank">
              {{ t('common.learnMore') }} →
            </a>
          </div>
          <div v-for="(tool, index) in developerTools" 
               :key="index"
               class="tool-card">
            <div class="card-header">
              <component :is="getIconComponent(tool.icon)" class="card-icon" />
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
              <component :is="getIconComponent(update.icon)" class="card-icon" />
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
            <component :is="getIconComponent(channel.icon)" class="card-icon" />
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
import IconGuide from '@/components/icons/developers/IconGuide.vue';
import IconBook from '@/components/icons/developers/IconDocument.vue';
import IconCode from '@/components/icons/developers/IconCode.vue';
import IconServer from '@/components/icons/developers/IconNetwork.vue';
import IconGithub from '@/components/icons/developers/IconGithub.vue';
import IconDiscord from '@/components/icons/developers/IconDiscord.vue';

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
const indexerTitle = computed(() => t('developers.tools.indexer.title'));
const indexerDescription = computed(() => t('developers.tools.indexer.description'));
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
    'guide': IconGuide,
    'book': IconBook,
    'code': IconCode,
    'server': IconServer,
    'github': IconGithub,
    'discord': IconDiscord
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
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
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
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
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
