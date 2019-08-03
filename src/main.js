import Vue from 'vue'
import App from './App'

// Vue.use(Loading.directive);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
