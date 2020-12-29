// 这是入口文件
import Vue from 'vue'


// axios
// 引入
import Axios from 'axios'
// 给vue原型挂载一个属性
Vue.prototype.$axios=Axios









// 注册vuex
import Vuex from "vuex"
Vue.use(Vuex)







// 每次刚进入网站的时候，肯定会调用main.js，在刚调用的时候，先从本地存储中，把购物车的数据读取出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
        // 将购物车中商品的数据，用一个数组存储起来，在car数组中，存储商品对象
        // {id:商品id，count:商品数量，price:价格, selected:true/false, }
        car: car
    },
    mutations: {
        // 点击加入购物车，把商品信息保存到store中的car上
        addToCar(state, goodsInfo) {
            // 分析：
            // 1. 如果购物车中，之前已经有这个对应的商品了，那么只需要更新数量
            // 2. 如果没有，则直接把商品数据push到car中
            // 假设在购物车中没有找到对应的商品
            var flag = false;
            state.car.some(item => {
                console.log(item)
                if (item.id == goodsInfo.id) {
                    flag = true;
                    item.count = item.count + parseInt(goodsInfo.count)
                    return true;
                }
            })
            if (!flag) {
                state.car.push(goodsInfo)
            }
            // 当更新car之后，把car数组，存储到本地的localStorage中，
            localStorage.setItem('car', JSON.stringify(state.car));
        },

        updateGoodsInfo(state, goodsInfo) {
            // 修改购物车中商品的数量值
            state.car.some(item => {
                if (item.id == goodsInfo.id) {
                    item.count = goodsInfo.count;
                    return true;
                }
            })
            // 当更新car之后，把car数组，存储到本地的localStorage中，
            localStorage.setItem('car', JSON.stringify(state.car));
        },

        removeFromCar(state,id){
            // 购物车中，点击删除按钮，根据id删除某个元素
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        },

        changeSelected(state,id){
            state.car.some(item=>{
                if(item.id==id){
                    item.selected=!item.selected;
                    return true;
                }

            })
            localStorage.setItem('car', JSON.stringify(state.car));
        },


    },
    getters: {
        // 相当于计算属性，也相当于filters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += parseInt(item.count);
            })
            return c;
        },

        getCountAndAmount(state){
            var c=0;
            var amount=0;
            state.car.forEach(item=>{
                if(item.selected){
                    c+=parseInt(item.count);
                    amount+=item.price*parseInt(item.count);
                }
            })
            return {count:c,amount:amount}
        }
    }
});









// 导入时间格式化插件
import moment from 'moment'

// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})










//1.1 导入路由的包：
import VueRouter from 'vue-router'
//1.2 安装路由模块
Vue.use(VueRouter)
//1.3 导入自己的router.js路由模块
import router from './router.js'


// 2.1 导入Vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)
// 设置请求根路径
//Vue.http.options.root='https://njrzzk.com'
// 全局设置post时候表单数据格式组织形式; 默认请求头: application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true




// 按需导入mint-ui 
// import { Header ,Button} from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// // 懒加载
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload)
import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


// 导入mui的样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

// 导入app根组件
import app from './app.vue'








//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)





var vm = new Vue({
    el: "#app",
    render: createElements => createElements(app),
    // 挂在路由对象到vm实例上
    router,
    store
})


