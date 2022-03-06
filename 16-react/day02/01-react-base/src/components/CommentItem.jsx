import React from 'react'

// 第一层封装：将样式对象和UI结构进行分离
// const ItemStyle={border:"1px dashed #ccc",margin:"10px",padding:"10px",boxShadow:"0 0 10px #ccc"};
// const userStyle={fontSize:'14px'};
// const contentStyle={fontSize:'12px'};

// 第二层封装：将各个样式对象合并成一个大的样式对象
// const styles={
//     item:{border:"1px dashed #ccc",margin:"10px",padding:"10px",boxShadow:"0 0 10px #ccc"},
//     user:{fontSize:'14px'},
//     content:{fontSize:'12px'}
// }


// 第三层封装：将样式对象抽离为单独的 样式表 模块
import styles from './style.js'

// 评论项子组件
// 使用function构造函数，定义普通无状态的组件
export default function CommentItem(props) {
    console.log(props)
    return  <div style={styles.item}>
        <div>
            <h2 style={styles.user}>评论人：{props.user}</h2>
            <p style={styles.content}>评论内容：{props.content}</p>
        </div>
    </div>
}