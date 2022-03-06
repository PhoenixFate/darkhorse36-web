// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示

// 使用@/ 来解决放到不同文件中的路径问题
// import CommentList from '@/components/CommentList2'
// import CommentList from './components/CommentList'


import InputValue from './components/BindInputValue'


// 3. 调用render进行渲染
// xml标签需要闭合和自闭合
// 什么情况下需要是要{ } ?
// 当我们需要在jsx控制的区域内，写js表达式了，则需要把js代码写到{ } 之中
ReactDOM.render(
<div>
    123
    {/* <CommentList></CommentList> */}
    <InputValue></InputValue>
</div>,document.getElementById('app'))

