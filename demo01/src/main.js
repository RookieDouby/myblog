import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

// create router
const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')