<!-- d:\sat20-website\src\views\Documentation.vue -->
<template>
  <div class="documentation-view">
    <!-- 文档标题 -->
    <h1 class="doc-title" v-if="docData">{{ docData.title }}</h1>
    <h1 class="doc-title error" v-else>文档不存在</h1>
    
    <!-- 元信息栏 -->
    <div class="meta-bar" v-if="docData">
      <div class="last-updated">
        {{ $t('docs.lastUpdated') }}: {{ lastUpdated }}
      </div>
      <div class="category-tag">
        {{ $t(`docs.categories.${category}`) }}
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="content-wrapper" v-if="docData">
      <!-- 目录导航 -->
      <nav class="toc-nav" v-if="headings.length">
        <h3 class="toc-title">{{ $t('docs.toc') }}</h3>
        <ul class="toc-list">
          <li 
            v-for="(heading, index) in headings" 
            :key="index"
            :class="{ 'active': activeHeading === heading.id }"
          >
            <a 
              :href="`#${heading.id}`" 
              @click.prevent="scrollToHeading(heading.id)"
              :class="{ 
                'level-2': heading.level === 2,
                'level-3': heading.level === 3,
                'active': activeHeading === heading.id
              }"
            >
              {{ heading.text }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- 文档内容 -->
      <article 
        class="doc-content markdown-body"
        v-html="sanitizedContent"
        ref="contentEl"
        @scroll="handleScroll"
      ></article>
    </div>

    <!-- 错误提示 -->
    <div class="error-message" v-else>
      <p>抱歉，该文档不存在或正在建设中。</p>
      <router-link :to="{ name: 'documentation', params: { category: 'getting-started' }}">
        返回快速开始
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import DOMPurify from 'dompurify'
import marked from 'marked'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const { t } = useI18n()
const route = useRoute()
const contentEl = ref(null)

// 获取文档数据
const docData = computed(() => {
  try {
    return {
      title: t(`docs.${props.category}.title`),
      content: t(`docs.${props.category}.content`)
    }
  } catch (e) {
    console.error("翻译加载失败:", e); // 打印错误，方便排查
    return null
  }
})

// 生成最后更新时间
const lastUpdated = computed(() => {
  return new Intl.DateTimeFormat('zh-CN', { 
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(new Date())
})

// 解析并消毒Markdown内容
const sanitizedContent = computed(() => {
  if (!docData.value) return ''
  
  const html = marked.parse(docData.value.content || '', {
    headerIds: true,
    breaks: true
  })
  return DOMPurify.sanitize(html)
})

// 提取标题生成目录
const headings = ref([])
const activeHeading = ref('')
const headingElements = ref([])

const extractHeadings = () => {
  if (!contentEl.value) return

  // 获取所有h2和h3标题
  const elements = contentEl.value.querySelectorAll('h2, h3')
  headingElements.value = elements

  headings.value = Array.from(elements).map(el => {    
    // 获取上方的 a 标签的 id
    let headingId = el.previousElementSibling?.querySelector('a')?.id || '';    
    return {
      id: headingId,
      text: el.textContent,
      level: parseInt(el.tagName.substring(1)),
      offsetTop: el.offsetTop
    };
  });

}

// 处理滚动，更新当前激活的标题
const handleScroll = () => {
  if (!contentEl.value || headings.value.length === 0) return
  
  const scrollPosition = window.scrollY
  let currentHeading = headings.value[0].id

  // 找到当前滚动位置对应的标题
  for (const heading of headings.value) {
    if (heading.offsetTop <= scrollPosition + 100) {
      currentHeading = heading.id
    } else {
      break
    }
  }

  activeHeading.value = currentHeading
}

function findScrollParent(element) {
  while (element) {
    const overflow = getComputedStyle(element).overflowY;
    if (overflow === 'auto' || overflow === 'scroll') {
      return element;
    }
    element = element.parentElement;
  }
  return window;
}


const scrollToHeading = (id) => {
  setTimeout(() => {
    const target = document.getElementById(id);
    if (!target) {
      console.error("Element not found:", id);
      return;
    }

    // 确保目标可见
    target.style.display = "block";

    // 找到最近的可滚动容器
    const scrollParent = findScrollParent(target);
    const offset = target.offsetTop - 80;

    scrollParent.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    activeHeading.value = id;
  }, 100);
};


// 监听路由hash变化
watch(() => route.hash, (newHash) => {
  if (newHash) {
    const id = newHash.slice(1)
    scrollToHeading(id)
  }
}, { immediate: true })

// 监听分类变化，重新提取标题
watch(() => props.category, () => {
  nextTick(() => {
    extractHeadings()
    if (route.hash) {
      const id = route.hash.slice(1)
      scrollToHeading(id)
    }
  })
})

// 生命周期钩子
onMounted(() => {
  nextTick(() => {
    extractHeadings()
    if (route.hash) {
      const id = route.hash.slice(1)
      scrollToHeading(id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.documentation-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.doc-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;

  &.error {
    color: var(--error-color);
  }
}

.meta-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.9rem;

  .last-updated, .category-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
      color: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.content-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  margin-top: 2rem;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.toc-nav {
  position: sticky;
  top: 2rem;
  height: fit-content;
  background: var(--bg-card);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(42, 111, 255, 0.1);

  .toc-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        display: block;
        padding: 0.5rem;
        border-radius: 8px;
        color: var(--text-secondary);
        text-decoration: none;
        transition: all var(--transition-normal);

        &.level-2 {
          padding-left: 1rem;
        }

        &.level-3 {
          padding-left: 2rem;
          font-size: 0.9rem;
        }

        &:hover {
          background: var(--bg-hover);
          color: var(--primary);
        }

        &.active {
          background: var(--primary-10);
          color: var(--primary);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    position: static;
    margin-bottom: 2rem;
  }
}

.doc-content {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(42, 111, 255, 0.1);
  min-height: 500px;

  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--card-hover-shadow);
  }

  :deep(h1) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  :deep(h2) {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
  }

  :deep(h3) {
    font-size: 1.2rem;
    margin: 1.5rem 0 1rem;
    color: var(--text-primary);
  }

  :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  :deep(ul), :deep(ol) {
    margin-bottom: 1rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
    }
  }

  :deep(code) {
    background: var(--bg-hover);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--primary-color);
  }

  :deep(pre) {
    background: var(--bg-code);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
    border: 1px solid var(--border-color);

    code {
      background: none;
      padding: 0;
      color: var(--text-primary);
      font-size: 0.9rem;
    }
  }

  :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;

    th, td {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      text-align: left;
    }

    th {
      background: var(--bg-hover);
      font-weight: 600;
      color: var(--text-primary);
    }

    td {
      color: var(--text-secondary);
    }

    tr:nth-child(even) {
      background: var(--bg-hover);
    }
  }

  :deep(blockquote) {
    margin: 1rem 0;
    padding: 1rem;
    border-left: 4px solid var(--primary-color);
    background: var(--bg-hover);
    border-radius: 4px;

    p {
      margin: 0;
      color: var(--text-secondary);
    }
  }

  :deep(hr) {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 2rem 0;
  }

  :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }

  :deep(a) {
    color: var(--primary-color);
    text-decoration: none;
    transition: all var(--transition-normal);

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .doc-title {
    font-size: 2rem;
  }

  .doc-content {
    padding: 1rem;
  }
}
</style>