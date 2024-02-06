import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, RadarChart, GaugeChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
} from 'echarts/components'

import EasyCrud from './easy-crud/index.vue'
import EasyForm from './easy-form/index.vue'
import EasyChart from './easy-charts/index.vue'
import EasyUpload from './easy-upload/index.vue'
import EasyTreeSlider from './easy-treeSlider/index.vue'
import EasyResource from './easy-resource/index.vue'
import EasyResourceButton from './easy-resource/button.vue'
import EasyUser from './easy-user/index.vue'
import EasyEditor from './easy-editor/index.vue'
import EasyWangEditor from './easy-wangEditor/index.vue'
import EasyIcon from './easy-icon/index.vue'
import EasyCodeEditor from './easy-codeEditor/index.vue'
import EasyUserInfo from './easy-userInfo/index.vue'
import EasyCityLinkage from './easy-cityLinkage/index.vue'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GaugeChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
]);

export default {
  install(Vue) {
    Vue.component('EasyChart', EasyChart)
    Vue.component('EasyCrud', EasyCrud)
    Vue.component('EasyForm', EasyForm)
    Vue.component('EasyUpload', EasyUpload)
    Vue.component('EasyTreeSlider', EasyTreeSlider)
    Vue.component('EasyResource', EasyResource)
    Vue.component('EasyResourceButton', EasyResourceButton)
    Vue.component('EasyUser', EasyUser)
    Vue.component('EasyEditor', EasyEditor)
    Vue.component('EasyWangEditor', EasyWangEditor)
    Vue.component('EasyIcon', EasyIcon)
    Vue.component('EasyCodeEditor', EasyCodeEditor)
    Vue.component('EasyUserInfo', EasyUserInfo)
    Vue.component('EasyCityLinkage', EasyCityLinkage)
  }
}
