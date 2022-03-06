// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示


import   './04-创建组件的第一种方式.js'



// 3. 调用render进行渲染
// xml标签需要闭合和自闭合
// 什么情况下需要是要{ } ?
// 当我们需要在jsx控制的区域内，写js表达式了，则需要把js代码写到{ } 之中
// ReactDOM.render(
// <div>
//     12345
// </div>,document.getElementById('app'))

