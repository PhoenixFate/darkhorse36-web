// 这是node中向外暴露成员的方式：
// module.exports{

// }


// 在node中，使用var名称=require('模块标识符') 导入模块
// module.exports 和 exports 来暴露成员





// 在es6中，也通过规范的形式，规定了es6如何导入和导出模块
// es6中导入模块：import 模块名称 from '模块标识符'           import  '标识路径'
// es6向外暴露成员： export default 和export 向外暴露成员

var info={
    name:'zhangsan',
    age:20
}

export default info;

// export default {
//     address: '北京'
// }

// 注意：在一个模块中，只能使用export default向外暴露一次


// 在一个模块中，既能使用export default 和 export 向外暴露成员
export var title="小星星"
export var content="content"

// 注意:  使用export 向外暴露的成员，只能使用 {  } 的形式来接收，这种形式，叫做【按需导出】
// 注意： export 可以向外暴露多个成员，同时，如果某些成员，我们在import的时候，不需要，则可以不在 {  }中定义
// 注意： 使用export导出的成员，必须严格按照导出时候的名字，来使用{ }按需接收
// 注意： 使用export导出的成员，如果想换个名称来接收，可以使用as来起别名
