// 这个main.js是这个项目的入口js
console.log("day05")
// 导入jquery
// import *** from *** 是es6中导入模块的方式
// 由于es6 的语法太高级；浏览器无法直接执行，所以执行下面这行会报错，所以需要webpack
import $ from 'jquery'

// 使用import 导入样式
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
// 注意： webpack, 默认只能打包处理js类型的文件，无法处理其他非js类型的文件；
// 如果要处理非js类型的文件，需要手动安装一些合适的第三方loader加载器；
// 1.如果想要打包处理css文件，需要安装cnpm i style-loader css-loader -
// 2.打开webpack.config.js 这个配置文件，在里面新增一个配置节点：module，它是一个对象
//   在module对象上，有一个rules属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则；

// 注意: webpack处理第三方文件类型的过程：
// 1. 发现这个要处理的文件不是js文件，然后就去配置文件中，查找有没有对应的第三方loader规则
// 2. 如果能找到对应的规则，就会调用对应的loader处理这种文件类型；
// 3. 在调用loader的时候，是从后往前调用；
// 4. 当最后一个loader加载完毕，会把处理的结果，直接交给webpack进行打包合并，最终输出到bundle.js中


$(function(){
    $('li:odd').css("backgroundColor","blue");
    $('li:even').css("backgroundColor",function(){
        return '#'+'D97436'
    })
})

// 正常的js脚本无法引入其他的js
// 借助import 引入其他js

// webpack 能够处理js 文件之间的互相依赖关系
// webpack 能够处理js 的兼容问题，把高级的、浏览器无法识别的语言，转换为低级的、浏览器能够识别的语言
// 运行的命令格式 ：   webpack 要打包的文件路径 -O 打包好的输出的文件路径  (webpack 4+ )
//                    webpack 要打包的文件路径  打包好的输出的文件路径  (webpack 3+ )


// class 关键字，是ES6中提供的新语法，用来实现ES6中面向对象编程的方式
class Person {
    // 使用staitc 关键字，可以定义静态属性
    // 所谓静态属性就是可以通过类名访问的属性
    // 实例属性：只能通过类的实例来访问的属性，叫做实例属性
    static info={name:"wewr",age:20};
}

// 在webpack中，默认只能处理一部分es6新语法，一些更高级的es6或es7语法，需要借助第三方的loader
// 通过babel，可以帮我们将高级的语法转换为低级的语法
// 1. 在webpack中，可以运行如下安装两套命令，去安装Babel相关的loader功能：
// 1.1 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D   
// 1.1 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开webpack配置文件，在module节点下的rules数组中，添加一个新的匹配规则：
// 2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 2.2 注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude排除掉
// 3. 在项目的根目录中，新建一个叫做.babelrc 的Babel配置文件，这个配置文件数据json格式，所以必须符合json规范：不能写注释，字符串必须双引号
// 3.1 在.babelrc中写如下的配置：
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }
console.log(Person.info);
var p1=new Person();

function Animal(name){
    this.name=name;
}
Animal.info=123;
// 这是静态属性
console.log(Animal.info);
var a1=new Animal('aaa');
// 这是实例属性
console.log(a1.info);




/*

babel-loader 8.x对应babel-core 7.x
babel-loader 7.x对应babel-core 6.x

cnpm i babel-loader -D  

1、 卸载旧的babel-core
npm un babel-core
2、 安装新的babel-core
cnpm i -D @babel/core
3、 卸载旧的babel-preset
npm un babel-preset-env
npm un babel-preset-stage-0
4、 安装新的babel-preset
cnpm i @babel/preset-react -D
cnpm i @babel/preset-env -D
cnpm i babel-preset-mobx -D
5、 卸载旧的babel-plugin
npm un babel-plugin-transform-runtime
6、 安装新的babel-plugin
cnpm install --save-dev @babel/plugin-proposal-object-rest-spread
cnpm install --save-dev @babel/plugin-transform-runtime
cnpm install --save @babel/runtime
7、 修改.babelrc文件
{
    "presets": ["@babel/preset-env", "@babel/preset-react", "mobx"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime"
    ]
}

*/
