## 创建基本的webpack4.x项目
1. 运行`npm init -y`快速初始化项目
2. 在项目根目录创建`src`源代码目录和`dist`产品目录
3. 在src目录下创建index.html
4. 使用cnpm安装webpack, 运行`cnpm i webpack -D`  
    + `cnpm i webpack-cli -D`
    + 全局运行`npm install cnpm -g` 安装cnpm
5. 注意：webpack4.x提供了约定大于配置的概念；目的是为了尽量减少配置文件的体积
    + 默认约定了：
    + 打包入口是`src`->`index.js`
    + 打包的输出文件是`dist`->`main.js`

## import 的时候省略.jsx后缀名
1. 打开webpack.config.js，在导出对象中，新增如下节点：
    `resolve:{
        extensions:['js','jsx','.json']  // 表示这几个文件的后缀名可以不写，会自动补全
    }`


## ES6中class关键字，是实现面向对象的关键字
1. 正常文字**加粗文字**

## 在项目中启用模块化，并同时使用bootstrap
1. 把自己的样式表，定义为`scss`文件
2. 第三方的样式表，还是以`.css` 结尾
3. 我们只需要为自己的`.scss`文件，启用模块化即可
4. 运行`cnpm i sacc-loader node-sass -D`安装能够解析`scss`文件的loader
