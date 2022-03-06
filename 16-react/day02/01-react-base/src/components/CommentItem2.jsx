import React from 'react'

import cssObj from '../css/CommentItem.scss'
console.log(cssObj)


// 评论项子组件
// 使用function构造函数，定义普通无状态的组件
export default function CommentItem(props) {
    console.log(props)
    return  <div className={cssObj.cmtBox}>
        
            <h2 className={cssObj.title}>评论人：{props.user}</h2>
            <p className={cssObj.content}>评论内容：{props.content}</p>
        </div>

}