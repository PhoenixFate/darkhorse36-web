
// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'      // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示

// 2. 创建虚拟dom元素
// const mydiv = React.createElement('div',{id:'mydiv',title:"aaa"},'这是一个div元素')


// html是最优秀的标记语言
//You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// 注意： 在js文件中，默认不能写这种类似html 的标记，否则打包会失败
// 可以把babel来转换这些js中的标签
// 这种在js中混合写入类似html的语法，叫做jsx语法：符合xml规范的js
// 注意：jsx的本质：在运行的时候，被转换成了React.createElement()的形式来执行


// 安装babel插件：
// cnpm i babel-core babel-loader babel-plugin-transform-runtime -D  (cnmp i babael/core@7.0.0)
// cnpm i babel-preset-env babel-preset-stage-0 -D

const mydiv=
<div id="mydiv" title="aaa">
    这是一个div元素
    <h1>这是一个h1标签</h1>    
    
</div>



// 3. 调用render进行渲染
ReactDOM.render(mydiv,document.getElementById('app'))