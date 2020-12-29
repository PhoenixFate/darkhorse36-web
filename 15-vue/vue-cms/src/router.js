// 1.导入vue-router包
import VueRouter from 'vue-router'

//2.导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShoppingCartContainer from './components/tabbar/ShoppingCartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


// 3.创建路由对象
var router=new VueRouter({
    // 配置路由规则
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shoppingcart',component:ShoppingCartContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoInfo/:id',component:PhotoInfo},
        {path:'/home/goodsList',component:GoodsList},
        {path:'/home/goodsInfo/:id',component:GoodsInfo,name:'goodsInfo'},
        {path:'/home/goodsDesc/:id',component:GoodsDesc,name:'goodsDesc'},
        {path:'/home/goodsComment/:id',component:GoodsComment,name:'goodsComment'}
    ],
    // 覆盖默认的路由高亮的类
    // 默认的路由高亮类：router-link-active
    linkActiveClass:'mui-active'
})

//把路由对象暴露出去
export default router
