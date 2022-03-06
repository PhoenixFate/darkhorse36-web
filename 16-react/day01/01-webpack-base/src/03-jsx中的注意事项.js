
// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示

// 2. 创建虚拟dom元素
let a=10;
let str="你好中国"
let b=true;
let title="999"
const hh=<h1>红红火火</h1>

const arr=[
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]

const arrStr=[
    'aaa','bbb','ccc'
]

// 方法1:
// 定义一个空数组，将来用来存放 名称 标签 
const namearr=[];
// foreach没有返回值
// 注意：React中，需要把key添加给被forEach或者map 或for循环直接控制的元素
var aa=arrStr.forEach(element => {
    console.log(element)
    const temp= <h5 key={element}>{element}</h5>
    namearr.push(temp)
});
console.log(aa)

// 方法2：
// 数组的map方法：
// map有返回值
var result=arrStr.map(item=>{
    return item+"~~"
})

console.log(result)


// 3. 调用render进行渲染
// xml标签需要闭合和自闭合

// 什么情况下需要是要{ } ?
// 当我们需要在jsx控制的区域内，写js表达式了，则需要把js代码写到{ } 之中
ReactDOM.render(<div>{a}
    <h2>{str}</h2>
    {b?"true":"false"}<br/>
    <p title={title}>这是p标签</p>
    {hh}
    {
        // jsx中的注释
        /* jsx中的注释 */
    }
    {/* {arr}
    <br></br>
    {namearr} */}
    <hr/>
    {arrStr.map(item=><h3 key={item}>{item}</h3>)}

    <p className="sdf">sfiwjerojwioer</p>
    <label htmlFor="jsdi"></label>
    </div>,document.getElementById('app'))