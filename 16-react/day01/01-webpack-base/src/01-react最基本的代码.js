// 假设main.js 还是我们的入口文件
console.log("okk")
// webpack-dev-server 打包好的main.js是托管到了内存中，所以在项目根目录中看不到；
// 但是，我们可以认为，在项目根目录中，有一个看不见的main.js


// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'      // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示

// 2. 创建虚拟dom元素
// 参数1： 创建的元素类型，字符串，表示元素的名称
// 参数2： 是一个对象或null, 表示当前dom的属性
// 参数3： 子节点（包括其他虚拟dom 获取文本子节点）
// 参数n: 其子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的h1</h1>
 
 
const myh1=  React.createElement('h1',{id:'myh1',title:'this is a h1 '},'这是一个大大的h1');
const mydiv=React.createElement('div',null,'这是一个div元素',myh1); 


// 渲染页面上的DOM结构，最好的方式：就是写html代码
// const mytest=<div>aaa</div>




// 3. 使用ReactDOM把虚拟dom渲染到页面上
// 参数1：要渲染的那个虚拟的dom元素
// 参数2：指定页面上的DOM元素，当做一个容器
ReactDOM.render(mydiv, document.getElementById("app"))