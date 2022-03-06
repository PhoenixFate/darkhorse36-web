import React from 'react'

// #region 可以使注释代码块折叠起来
// #endregion


//#region
// export default class BindEvent extends  React.Component {
//     constructor(){
//         super();
//         this.state={
//             msg:"哈哈",
//             age:23,
//             name:"wjei",
//         }
//     }

//     render(){
//         return <div>
//             BindEvent組件
//             <hr></hr>
//             {/* 在React中有一套自己的事件绑定机制，事件名：小驼峰命名 */}
//             {/* 注意：onClick只接受function作为处理函数  */}
//             {/* 箭头函数本身就是一个 匿名的function */}
//             <button onClick={()=>this.myClickHandler("🐖")}>按钮</button>

//             {/* 点击按钮修改msg的值 */}
//             <button onClick={()=>this.changeMsg("涉及到法律框架为")}>异步修改msg</button>
//             <button onClick={()=>this.changeMsg2()}>同步修改msg</button>
//             <h3>{this.state.msg}</h3>
//         </div>
//     }

//     // 这是一个实例方法
//     myClickHandler=(a)=>{
//         console.log(a)
//         console.log("my click handler")
//     }

//     changeMsg=(newValue)=>{
//         console.log(newValue);

//         // 注意：在React中，如果想为state中的数据重新赋值，不要使用this.state.xxx=xxx
//         // this.state.msg=newValue;

//         // 应该调用React提供的this.setState({})
//         // setState这个方法是异步的
//         this.setState({msg:234234})
//         console.log(this.state.msg)
//     }

//     changeMsg2=()=>{
//         this.setState({msg:'修改之后调用callback'},function(){
//             // 在回调里面获得最新的msg的值
//             console.log(this.state.msg)
//         })
//     }
// }
//#endregion

export default class BindEvent extends  React.Component {
    constructor(){
        super();
        this.state={
            msg:"哈哈",
            age:23,
            name:"wjei",
        }
    }

    render(){
        return <div>
            BindEvent組件
            <hr></hr>
            {/* 在React中有一套自己的事件绑定机制，事件名：小驼峰命名 */}
            {/* 注意：onClick只接受function作为处理函数  */}
            {/* 箭头函数本身就是一个 匿名的function */}
            <button onClick={()=>this.myClickHandler("🐖")}>按钮</button>

            {/* 点击按钮修改msg的值 */}
            <button onClick={()=>this.changeMsg("涉及到法律框架为")}>异步修改msg</button>
            <button onClick={()=>this.changeMsg2()}>同步修改msg</button>
            <h3>{this.state.msg}</h3>
        </div>
    }

    // 这是一个实例方法
    myClickHandler=(a)=>{
        console.log(a)
        console.log("my click handler")
    }

    changeMsg=(newValue)=>{
        console.log(newValue);

        // 注意：在React中，如果想为state中的数据重新赋值，不要使用this.state.xxx=xxx
        // this.state.msg=newValue;

        // 应该调用React提供的this.setState({})
        // setState这个方法是异步的
        this.setState({msg:234234})
        console.log(this.state.msg)
    }

    changeMsg2=()=>{
        this.setState({msg:'修改之后调用callback'},function(){
            // 在回调里面获得最新的msg的值
            console.log(this.state.msg)
        })
    }
}