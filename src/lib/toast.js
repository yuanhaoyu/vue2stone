import Stoast from '../components/Stoast'

var Toast = {}

Toast.install = function (Vue, options) {
  // if (document.querySelector('#toast').length) {
  //   return
  // }
  let ToastTpl = Vue.extend(Stoast)
  let $vm = new ToastTpl()
  let tpl = $vm.$mount().$el
  document.body.append(tpl)
  Vue.prototype.$toast = {
    show (options) {
      if (typeof options === 'string') {
        $vm.msg = options
      } else if (typeof options === 'object') {
        Object.assign($vm, options)
      }
      $vm.show = true
    },
    hide () {
      $vm.show = false
    }
  }
}

export default Toast
