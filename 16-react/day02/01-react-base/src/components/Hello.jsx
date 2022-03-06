// 第一种创建的方式：
import React from 'react'       // 创建组件、虚拟dom元素、生命周期 


// 创建并导出
export default function Hello(props){
    // 如果在一个组件中return null; 则表示此组件什么都不渲染
    // return null;
    // 在组件中，必须返回一个合法的jsx虚拟dom元素
    // 下面这句话报错，不管是vue还是react，props属性永远都是只读的；不能被重新赋值
    // props.name="sss"
    console.log(props)
    return <div>这是Hello 组件--------------{props.user.name}----------{props.user.age}-----------------{props.user.gender}</div>
}

// export default {
//     Hello
// }