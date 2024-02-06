import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import globalComponents from '@/components'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import directives from './directives'

// 官方样式
// import '@arco-design/web-vue/dist/arco.css'
// EasyCMF-V2样式
import '@arco-themes/vue-mine-admin-v2/index.less'
import './style/skin.less'
import './style/index.css'
import './style/global.less'

import tool from '@/utils/tool'
import * as common from '@/utils/common'
import packageJson from '../package.json'

const app = createApp(App)

app.use(ArcoVue, {})
.use(ArcoVueIcon)
.use(router)
.use(store)
.use(i18n)
.use(directives)
.use(globalComponents)

// 注册easy-icon图标
const modules = import.meta.glob('./assets/easy-icons/*.vue',{ eager: true })
for (const path in modules) {
  const name = path.match(/([A-Za-z0-9_-]+)/g)[2]
  const componentName = `EasyIcon${name}`
  app.component(componentName, modules[path].default)
}

app.config.globalProperties.$tool = tool
app.config.globalProperties.$common = common
app.config.globalProperties.$title = import.meta.env.VITE_APP_TITLE
app.config.globalProperties.$url = import.meta.env.VITE_APP_BASE

app.mount('#app')

tool.capsule('EasyCMF', `v${packageJson.version} release`)
console.log('EasyCMF 官网  http://www.easycmf.cn')
console.log('EasyCMF 文档  http://doc.easycmf.cn')
console.log('EasyCMF Github https://github.com/sefunion/easycmf')
console.log('EasyCMF-Vue Github https://github.com/sefunion/easycmf-frontend')
console.log('请不要吝啬您的 star，谢谢 ~ 🤩🤩🤩')