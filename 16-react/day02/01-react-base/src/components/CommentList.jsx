import React from 'react'

import CommentItem from './CommentItem'

// 使用class关键字定义父组件
export default class CommentList extends React.Component{
    constructor(){
         super();
         this.state={
            CommentList:[
                {id:1,user:'张三',content:"哈哈哈"},
                {id:2,user:'李斯',content:"呵呵"},
                {id:3,user:'王五',content:"哈哈哈"},
                {id:4,user:'嬴政',content:"天下是朕的天下"},
                {id:5,user:'吕不韦',content:"？？？"},
            ]
         }
    }

    render(){

        return <div>
            {/* 注意在jsx中写style行内样式，不能为style设置字符串的值
                而是应该：style={ {color:'red'} }
            */}
            <h1 style={{color:'red',fontSize:'35px','fontWeight':200,'textAlign':"center"}}>这是评论列表组件</h1>
            {/* 循环CommentList */}
            {this.state.CommentList.map((item)=>{
                return <CommentItem {...item} key={item.id}></CommentItem>
            })} 

        </div>
    }
}