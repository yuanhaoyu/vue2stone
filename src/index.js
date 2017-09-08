import Vue from 'vue'
import tool from './lib/tool'
import Sprogress from './components/Sprogress'
import Sstar from './components/Sstar'
import Scalendarfix from './components/Scalendarfix'
import Sselect from './components/Sselect'
import Sloading from './components/Sloading'
import Scircle from './components/Scircle'
import Sswitch from './components/Sswitch'
import Spicker from './components/Spicker'
import toast from './lib/toast'

Object.defineProperty(Vue.prototype, '$tool', {value: tool})
Vue.use(toast)

const vue2stone = {
  install (Vue, options) {
    Vue.component(Sprogress.name, Sprogress)
    Vue.component(Sstar.name, Sstar)
    Vue.component(Scalendarfix.name, Scalendarfix)
    Vue.component(Sselect.name, Sselect)
    Vue.component(Sloading.name, Sloading)
    Vue.component(Scircle.name, Scircle)
    Vue.component(Sswitch.name, Sswitch)
    Vue.component(Spicker.name, Spicker)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vue2stone)
}
export default vue2stone
