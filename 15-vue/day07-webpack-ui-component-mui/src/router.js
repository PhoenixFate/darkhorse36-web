// 1.导入vue-router包
import VueRouter from 'vue-router'

// 导入account组件
import account from "./main/account.vue"
import goodsList from "./main/goodsList.vue"
// 导入account里面的两个子组件
import login from "./subcomponents/login.vue"
import register from "./subcomponents/register.vue"

// 3.创建路由对象
var router=new VueRouter({
    routes:[
        {
            path:'/account',
            component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path:'/goodsList',component:goodsList}
    ]
})

//把路由对象暴露出去
export default router
