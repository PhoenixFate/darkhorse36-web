# Vue
## day07-vue-cms
正常字体大小
### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
#### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
##### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
###### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体

## [百度链接](http://www.baidu.com)

## (传统方式)命令行提交代码
1. git add.
2. git commit -m "提交信息"
3. git push 

## 制作首页app组件
1. 完成Header区域，使用的是Mint-ui中header组件
2. 制作底部Tabber区域，使用的是Mui的Tabber.html代码
 + 在制作购物车小图标的时候，操作相对会多一些
 + 先把拓展图标的css样式，拷贝到项目中去
 + 拷贝扩展字体库ttf文件到项目中
 + 为购物车小图标添加如下样式：class="mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造Tabber为router-link
## 设置路由高亮 
## 点击tabber中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用vue-resource获取数据
2. 使用this.$http.get('url').then(result=>{}) 获取数据
3. 获取到的数据要保存到this.swipeList上
4. 使用v-for循环渲染每个item项


## 改造新闻咨询 路由链接

## 新闻咨询页面制作
1. 绘制界面（使用mui中的media-list.html里面模板）
2. 使用vue-resource获取数据
3. 渲染真实数据


## 实现新闻咨询列表点击跳转到新闻详情
1. 把列表中每一项改造为router-link, 同时，在跳转的时候，应该提供id标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来


## 实现新闻详情的页面布局和数据渲染


## 单独封装一个comment.vue评论组件
1. 先创建一个单独comment.vue 模板
2. 在需要使用comment组件的页面中，先手动导入comment组件
    + `import comment from './comment.vue'`
3. 在父组件中使用`components`属性将刚才导入的comment组件注册为子组件
4. 将注册子组件时候的注册名称，以标签形式在页面中引入


## 获取所有的评论数据 显示到页面中
1. getComments()


## 点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中加载下一页数据
2. 点击加载更多，让pageNum++，然后重新调用this.getComments方法重新获取最新一页数据
3. 为了防止新数据覆盖老数据的情况，我们在加载更多的时候，每当获取到新数据的时候，使用数组拼接  this.comments=this.comments.concat(resutl.body.rows)

## 发表评论
1. 为文本框做双向绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，若为空，则Toast提示用户：评论内容不能为空
4. 通过vur-resource发送一个请求，把评论内容提交给服务器
5. 当发表评论成功之后，重新刷新评论列表
 + 如果调用getComments方法重新刷新列表，可能只能得到最后一页的评论，前几页的评论获取不到
 + 换一种思路：当评论成功后，在客户端手动拼接出一个最新的评论对象，然后调用数组的unshift()方法，
   把最新的数据，追加到data中的comments的开头；这样实现刷新评论的需求

## 图片分享
1. 改造图片分享为路由的链接并显示对应的组件页面

## 绘制图片列表 组件页面结构并美化样式
1. 制作顶部的滑动条
2. 制作底部的图片列表
### 制作顶部滑动条的坑：
1. 需要借助于 mui中的tab-top-webview-main.html
2. 需要把slider区域中 的mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动，通过检查官方组件，发现这是js组件，需要初始化一下：
 + 导入mui.js
 + 调用官方提供的方法初始化组件：
 ```
  mui('.mui-scroll-wrapper').scroll({
    deceleration:0.005 // flick 减速系数
  })
 ```
4. 我们在初始化滑动条的时候导入了mui.js，但是控制台报错：`mui.js:3964 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
 + webpack 打包好的bundle.js 默认是启动严格模式的，所以这两者冲突了
 + 解决方案：在webpack中禁用严格模式
 + npm install babel-plugin-transform-remove-strict-mode -D
 ```
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
    ]
 ``` 
5. 刚进入图片分享的时候，滑动条无法正常工作；如果要初始化滑动条，必须要等dom元素加载完毕，所以把初始化滑动条的代码搬到mounted()之中
6. 当滑动条ok之后，发现，tabber无法正常工作了，解决：
  ``` 
    mounted() { 
      mui('body').on('click','a',function(){
          document.location.href=this.href;
      })
    },
  ``` 
7. 获取所有分类，并渲染分类列表


### 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用mint-ui 提供的现成组件，‘lazy-load’
2. 根据lazy-load 的使用文档 尝试使用
3. 渲染图片列表数据


### 实现的图片列表的懒加载和图片美化


## 点击图片跳转到图片详情
1. 在li改造router-link的时候，使用tag标签，渲染为li标签
 
## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中的缩略图的功能
1. 使用插件 vue-preview  这个缩略图插件
2. 获取到所有的图片列表，然后使用v-for 渲染
3. 注意： img标签 上的class熟悉不能去掉
4. 注意： 每个图片对象中必须有w，h， 属性



## 绘制商品里列表 基本结构并美化
  


## 尝试在手机上 进行项目的开发和测试
1. 手机正常运行
2. 手机和电脑处于同一局域网
3. 打开自己项目中的package.json， 在dev脚本中，添加一个 --host指令，把当前电脑的wifi p地址设置为--host指令值，
 + 如何查看自己电脑所处wifi的ip：cmd：ipconfig
