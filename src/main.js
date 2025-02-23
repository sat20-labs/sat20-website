import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';
import Particles from 'vue3-particles'
import '@/assets/styles/variables.css';
import '@/assets/styles/theme.css';
import '@/assets/styles/code.css';
// 移除 tech-page.css 的引用
// import '@/assets/styles/tech-page.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faShieldAlt, faDownload, faExclamationTriangle, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 开发环境下打印语言包内容
if (import.meta.env.DEV) {
  // console.log('zh-CN:', zh)
  // console.log('en-US:', en)
}

const app = createApp(App)

library.add(faCode, faShieldAlt, faDownload, faExclamationTriangle, faCheckCircle, faArrowRight)
app.component('font-awesome-icon', FontAwesomeIcon)

// 添加调试日志
app.use(Particles, {
  init: async (engine) => {
    console.log(' 开始加载粒子引擎...')
    try {
      console.time('粒子加载耗时')
      await loadFull(engine)
      console.log(' 插件加载完成:', engine.plugins.map(p => p.name))
      
      await engine.init()
      console.log(' 引擎初始化完成')
      
      engine.start()
      console.timeEnd('粒子加载耗时')
      console.log(' 粒子系统运行状态:', engine.dom().length > 0 ? '活跃' : '未激活')
    } catch (err) {
      console.error(' 初始化错误:', err)
      throw err
    }
  }
})
//app.use(Particles)

app.use(router);
app.use(i18n);
app.mount('#app');

// 监听语言变化
window.addEventListener('storage', (e) => {
  if (e.key === 'language') {
    // i18n.global.locale.value = e.newValue;
    // i18n.global.fallbackLocale.value = e.newValue;
  }
});