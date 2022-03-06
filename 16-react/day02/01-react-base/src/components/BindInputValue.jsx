import React from 'react'

export default class BindInputValue extends React.Component {

    constructor(){
        super();
        this.state={
            msg:"this is a message",
            msg2:"this is a message two",
        }
    }

    render(){
        return <div>
            BindInputValue 组件
            <hr></hr>

            <h3>{this.state.msg}</h3>
            {/* 如果我们只是为文本框的value绑定到了state状态，但是，如果不提供onChange，得到的文本框将会是一个只读的文本框 */}
            {/* 为文本框提供value的值之后，要么同时提供一个onChange事件，要么设置readOnly属性  */}
            <input type="text" style={{width:'100%',border:"1px solid #ccc"}} value={this.state.msg} onChange={ (e)=>this.txtChange(e)}/>

            <input type="text" style={{width:'100%',border:"1px solid #ccc"}} value={this.state.msg2} onChange={ ()=>this.txtChange2()} ref="txt"/>
        </div>
    }

    // 每当文本框的内容变化，调用这个函数
    txtChange=(e)=>{
        console.log("textChange");
        // 在onChange事件中，获取文本框的值，有两种方案：
        // 方案一：通过事件参数e来获取
        console.log(e.target.value)
        this.setState({
            msg:e.target.value
        })
        // 方案二：
    }

    // 每当文本框的内容变化，调用这个函数
    txtChange2=()=>{
        console.log("textChange2");
        // 在onChange事件中，获取文本框的值，有两种方案：
        // 方案一：通过事件参数e来获取
        // 方案二：通过this.ref获取引用来获取值
        this.setState({
            msg2:this.refs.txt.value
        })
         
    }
}

