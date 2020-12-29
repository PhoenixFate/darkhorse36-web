// 如何在webpack构建的项目中，使用vue进行开发

// 复习：
// 在普通网页中使用vue
// 1.使用script标签，引入vue的包
// 2.在index页面中，创建一个id为app的div容器
// 3.通过new Vue 得到一个vue实例

// 在webpack中尝试使用vue
// 注意：在webpack中，使用import Vue from 'vue' 导入的Vue构造函数，功能不完整
//      只提供的了runtime-only的方式，并没有提供像网页中那样的方式 
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾包的查找规则：
// 1. 找项目根目录下有没有node_modules的文件夹
// 2. 在node_modules中根据包名找对应的vue 文件夹
// 3. 在vue文件夹中，找一个叫做package.json的包配置文件
// 4. 在package.json 文件中，查找一个main属性（main属性指定了这个包在被加载时候的入口文件）

// var login= {
//     template:"<h1>这是login组件，是使用网页中的形式创建出来的组件</h1>"
// }

// 导入login组件
import login from './login.vue'
// 默认webpack无法打包.vue文件，需要安装相关的loader:
// cnpm install vue-loader vue-template-compiler -D
// 在配置文件中新增loader配置项{test:/\.vue$/,use:'vue-loader'}



const FS=require('fs');
console.log("------------------------------")
console.log(FS);

var vm=new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    // components:{
    //     login
    // }

    // 在webpack中，如果想通过vue，把一个组件放到页面中展示，vm实例中的render可以实现
    // render:function(createElements){
    //     return createElements(login)
    // }
    // 简化写法： 
    render:createElements=>createElements(login)
    
})



// 总结： 在webpack中使用vue：
// 1. 安装vue的包:  cnpm install  vue -S
// 2. 由于在webpack中，推荐使用.vue组件模板文件定义组件，所以需要安装能够解析这种文件的loader
//    cnpm install vue-loader vue-template-compiler -D
// 3. 在main.js中导入vue模块
//    import Vue from 'vue'
// 4. 定义一个.vue 组件，其中组件有三部分组成： template script  style
// 5. 使用import导入组件 import login from './login.vue'
// 6. 创建vm的实例 var vm=new Vue({
//          el:"#app",
//          render:createElements=>createElements(login)
//     })
// 7. 在页面中创建一个id为app的div元素，作为vm实例控制的区域



import m1,{title as title123,content} from './test.js'
console.log(m1)
//console.log(title)
console.log(title123)
console.log(content)
// 注意：export default向外暴露的成员，可以使用任意变量来接收

