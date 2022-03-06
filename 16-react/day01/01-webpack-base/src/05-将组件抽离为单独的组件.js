
// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示


// 导入Hello组件
// 默认情况下，如果不做单独的配置，不能省略.jsx 后缀名
// import Hello from './components/Hello.jsx'
import Hello from '@/components/Hello'


// 组件名称首字符必须是大写的
function Hello2(props){
    // 如果在一个组件中return null; 则表示此组件什么都不渲染
    // return null;
    // 在组件中，必须返回一个合法的jsx虚拟dom元素

    // 下面这句话报错，不管是vue还是react，props属性永远都是只读的；不能被重新赋值
    // props.name="sss"
    console.log(props)
    
    return <div>这是Hello 组件--------------{props.name}----------{props.age}-----------------{props.gender}</div>
}

const user={
    name:'大黄',
    age:33,
    gender:'男'

}


// 3. 调用render进行渲染
// xml标签需要闭合和自闭合

// 什么情况下需要是要{ } ?
// 当我们需要在jsx控制的区域内，写js表达式了，则需要把js代码写到{ } 之中
ReactDOM.render(
<div>
    123
    <Hello user={user}></Hello>
    {/* ... es6 展开运算符 */}
    <Hello2 {...user}></Hello2>
</div>,document.getElementById('app'))

