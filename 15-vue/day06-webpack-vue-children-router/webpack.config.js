const path=require("path")
// 启用热更新的第二步
const webpack=require("webpack")

// 导入在内存中生成html的插件
// 只要是插件，都一定要放到plugins节点中去
// 1. 自动在内存中根据指定的页面生成一个内存的页面
// 2. 自动，把打包好的bundle.js 追加到内存中的页面
const htmlWebpackPlugin=require("html-webpack-plugin")

//  参考官方文档 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
//  Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const VueLoaderPlugin = require('vue-loader/lib/plugin');


// 指定路口（要打包文件的路径）和  出口（打包出来文件的路径）
// 这个配置文件 就是一个js文件， 通过node中的模块操作，向外暴露了一个配置对象
module.exports={
    // 指定入口和出口
    entry: path.join(__dirname,"./src/main.js"),// 入口，表示要使用webpack打包哪个文件

    // 输出文件相关的配置
    output: {  
        // 指定打包好的文件，输出到哪个目录中去
        path: path.join(__dirname,"./dist"),
        // 指定输出文件的名称
        filename:"bundle.js"
    },

    // 这是配置dev-server命令参数的第二种方式； 第一种见package.json 里面的dev2
    devServer: {
        // --open --port 8089 --contentBase src --hot
        open: true,  //自动打开浏览器
        port: 8090,   // 设置启动时运行的端口
        contentBase: 'src',   //指定托管的根目录
        hot: true  // 启用热更新 第一步
    },

    // 配置插件的节点
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  //new  一个热更新的模块对象， 这是启用热更新的第三步

        // 创建一个在内存中生成html页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname,'./src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        }),

        // 考官方文档 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
        // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
        new VueLoaderPlugin()
    ],

    // 这个节点用于配置所有的第三方模块  加载器
    module:{
        //  所有第三方的匹配规则
        rules:[
            //                   loader的调用规则：从右向左
            {test: /\.css$/,use:['style-loader','css-loader']},  //配置处理 .css文件的第三方文件规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},   //配置处理 .less文件的第三方文件规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},    //配置处理 .scss文件的第三方文件规则

            // limit 给定的值是图片的大小，单位是byte，如果我们引用的图片大于或等于limite的值，则不会被转为base64格式的字符串，如果图片的大小小于limit的值，则会转为base64的图片
            {test:/\.(png|jpg|gif|jpeg|bmp)$/,use:['url-loader?limit=500&name=[hash:8]-[name].[ext]']},               //配置处理图片url的加载器

            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},  // babel加载器，用来将es6等高级语法转换成低级语法


            {test:/\.vue$/,use:'vue-loader'}  // 处理.vue文件的加载器
        ]
    },

    resolve:{
        // 修改vue被导入时候的包的路径
        // alias:{
        //     "vue$":"vue/dist/vue.js"
        // }
    }

}

// 当我们在控制台，直接输入webpack命令执行的时候:
// 1.webpack 发现我们并没有通过命令的形式，给它指定的入口和出口
// 2. webpack 就会去项目的根目录中，查找一个叫做 webpack.config.js 的配置文件
// 3. 当找到配置文件之后，webpack会去解析执行这个文件，当解析执行完，就得到了配置对象
// 4. 当webpack拿到配置对象之后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建


// 使用webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1.运行npm install webpack-dev-server --dev 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和webpack的用法，完全一样
// 3.由于我们是在项目中，本地安装的webpack-dev-server，所以，无法把它当作脚本命令，在powershell终端中直接运行；
//   只有那些安装到全局-g 的工具，才能在终端中正常执行
// 4. webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的bundle.js ，并没有存放到实际的物理磁盘上面；而是直接托管到了电脑内存中，
//    所以我们在项目根目录中根本找不到bundle.js
// 6. 我们可以任务，webpack-dev-server工具把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中，虽然看不到，
//    但是可以任务和dist src node_modules 平级，有一个看不见的文件，叫做bundle.js