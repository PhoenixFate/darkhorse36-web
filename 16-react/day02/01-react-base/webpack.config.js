const path=require('path')
const HtmlWebPackPlugin=require('html-webpack-plugin')//导入在内存中自动生成index.html 的插件


// 创建一个插件的实例对象
const htmlPlugin=new HtmlWebPackPlugin({
    template: path.join(__dirname,"./src/index.html"),
    filename:'index.html'   // 生成内存中首页的名字
})


// 向外暴露一个大包的配置对象
//node 语法：因为webpack是基于node构建的，所以webpack支持所有的NodeAPI 和语法
// webpack 默认只能打包处理.js结尾的文件，像.png, .vue webpack无法主动处理，所以要配置第三方的loader
module.exports={
    mode:'development',  // development  production
    // 在webpack 4.x中：有一个很大的特性：约定大于配置， 约定的默认的大包入口路径是： src->index.js

    plugins:[htmlPlugin],

    module: {
        // 所有第三方模块的配置规则
        rules:[
            {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/}, //千万要加exclude排除项

            // 可以在css-loader之后通过“？” 追加参数，其中modules:表示 为普通的css样式表，启用模块化（模块作用域）
            // {test:/\.css$/,use:['style-loader','css-loader?modules']},  // 打包处理css样式表的第三方loader  

            {
                test: /\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            // 打包处理字体文件的loader      cnpm i url-loader -D
            {test:/\.(png|jpg|gif|jpeg|bmp)$/,use:['url-loader']},
            // {test:/\.(tff|woff|woff2|eot|svg)$/,use:['url-loader']},

            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },

            {test:/\.scss$/,use:['style-loader','css-loader?modules','sass-loader'] }   //sass-loader
        ]
    },

    resolve:{
        extensions:['.js','.jsx','.json'],  // 表示这几个文件的后缀名可以不写，会自动补全
        alias:{
            '@':path.join(__dirname,'./src')  // 这样，在这个项目中，@表示src这一层路径
        }
    }

}

// 向外暴露一个对象的另一种方式
// 这是es6中向外导出模板的api；与之对应的是import *** from '标识符'
// webpack是用node来构建的，node默认不支持es6，所以webpack默认不支持 export default
// export default {
    // 但目前不行
// }