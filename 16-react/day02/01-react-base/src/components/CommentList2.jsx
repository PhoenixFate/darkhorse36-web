import React from 'react'

// 导入css样式表
// 直接导入的css样式表，默认是整个项目生效
import cssObj from '../css/CommentList.scss'
console.log(cssObj)

// 如果在引用包的时候，这个包已经被安装到nodeModules中，
// 则可以省略node_modules 这一层目录，直接以包名开始引入 自己的模块的样式表 
// 自己规定：第三方的样式表 都以.css 结尾，，这样，我们不为普通的.css启用模块化
//         自己的样式表，都要以.scss  .less结尾，然后为.scss .less 启用模块化
// import bootstrapCSS from 'bootstrap/dist/css/bootstrap.css'
// console.log(bootstrapCSS);

import  'bootstrap/dist/css/bootstrap.css'

import CommentItem from './CommentItem2'

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
            <h1 className={[cssObj.title,'test'].join(' ')}>这是评论列表组件</h1>
            {/* 循环CommentList */}
            {this.state.CommentList.map((item)=>{
                return <CommentItem {...item} key={item.id}></CommentItem>
            })} 
            <button className="btn btn-primary">按钮 </button>
            <div className="panel panel-primary"></div>
        </div>
    }
}