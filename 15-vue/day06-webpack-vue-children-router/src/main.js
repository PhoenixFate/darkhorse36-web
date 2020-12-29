import Vue from 'vue'
// 导入app组件
import app from './App.vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装VueRouter
Vue.use(VueRouter)

import router from './router.js'


var vm=new Vue({
    el:"#app",
    render:createElements=>createElements(app),
    // 4.将路由对象挂在到vm上
    router
})

// 安装vue-router
// cnpm install vue-router -S


// 注意: App这个组件，是通过VM实例的render函数渲染出来的，render函数如果要渲染组件，
// 渲染出来的组件，只能放到el：”#app“ 所指定的的元素中；
// account, goodsList是通过路由匹配监听到，所以这两个组件，只能展示到<router-view></router-view>中去