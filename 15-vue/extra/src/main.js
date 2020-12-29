//引入一堆
import Vue from 'vue';
//主体
import App from './components/app.vue';


// axios
// 引入
import Axios from 'axios'
// 给vue原型挂载一个属性
Vue.prototype.$axios=Axios





//new Vue 启动
new Vue({
    el: '#app',
    render: c => c(App),
})