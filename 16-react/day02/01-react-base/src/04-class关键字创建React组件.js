// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟dom放到页面上展示

// 使用class创建组件，有自己的私有数据和生命周期函数
class Movie extends React.Component{

    // 构造器
    constructor(){
        // 由于Movie继承了React.Component这个父类，所以必须调用super()
        super()
        // 调用了super()之后，才能再调用this

        // this.state就相当于.vue中的 data(){return { }}
        this.state={
            msg:"大家好，我是渣渣辉"
        }

    }


    // render函数的作用: 渲染当前组件所对应的虚拟dom元素
    render(){
        // 在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需要接收，直接通过this.props.xxx直接访问

        // this.state可读可写
        this.state.msg="wejwio"

        return   <div>
            {/* 注意：在class内部，this表示当前组件的实例对象 */}
            {/* props都是只读的，不能被重新赋值 */}
            class关键字创建React组件
            <h1>{this.props.name}</h1>
            <h1>{this.props.age}</h1>
            <h1>{this.props.gender}</h1>
            <h5>{this.state.msg}</h5>
        </div>
    }
}


const user={
    name:"张三",
    age:12,
    gender:1,
}

const user2={
    name:"王五",
    age:124,
    gender:1,
}


// 3. 调用render进行渲染
// xml标签需要闭合和自闭合
// 什么情况下需要是要{ } ?
// 当我们需要在jsx控制的区域内，写js表达式了，则需要把js代码写到{ } 之中
ReactDOM.render(
<div>
    123
    {/* 这里的movie标签，其实就是Movie类的的一个实例对象 */}
    <Movie name={user.name} age={user.age}></Movie>
    <hr></hr>
    <Movie {...user2}></Movie>
</div>,document.getElementById('app'))

