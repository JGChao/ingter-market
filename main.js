import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

// 图片懒加载


// 表单验证
import validate from '@/components/ys-validate.js'
Vue.prototype.$validate = validate


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
