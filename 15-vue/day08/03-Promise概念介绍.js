// 1. Promise是一个构造函数，既然是构造函数，那么我们就可以new Promise() 得到一个promise的实例

// 2. 在Promise身上，有两个函数，分别为resolve和reject，resolve是成功之后的回调函数，reject是失败之后的回调函数

// 3. 在Promise构造函数的prototype属性上，有一个.then() 方法，也就是说，只要是Promise构造函数创建的实例，
//    都可以访问.then()方法

// 4. Promise表示一个异步操作，每当我们new 一个Promise的实例，这个实例就表示一个具体的异步操作

// 5. 既然Promise创建的实例是一个异步操作，那么这个异步操作的结果，只能有两种状态：
//    5.1 状态1： 异步操作成功了，需要在内部调用成功的回调函数：resolve，把结果返回给调用者
//    5.2 状态2： 异步操作失败了，需要在内部调用失败的回调函数：reject，把结果返回给调动者
//    5.3 由于Promise的实例是一个异步操作，所以内部拿到操作的结果，无法使用return返回调用者，
//        这时候，只能使用回调函数的形式，来把成功或失败的结果，返回给调用者

// 6. 我们可以在new出来的promise实例上，调用.then() 方法，【预先】为这个Promise异步操作，指定
//    成功和失败的回调函数

// 注意：这里new 出来的promise1只是代表形式上的一个异步操作 
// 什么是形式上的异步操作?: 就是说，我们只知道是一个异步操作，具体的异步事项不清楚（读文件，请求等）
// var promise1=new Promise()

// 这个一个具体的异步操作，使用function指定具体的异步操作内容
// var promise2=new Promise(function(){
//     // 这个function内部就是具体的异步操作
// })

const fs=require('fs')

// 每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
// 也就是说new的时候，除了能够得到一个promise实例之外，还会立即调用我们为promise传递的function，执行function之中的异步代码 
// var promise3=new Promise(function(){
//     fs.readFile('./files/1.txt',"utf-8",(err,dataStr)=>{
//         if(err) throw err
//         console.log(dataStr)
//     })
// })

function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,(err,dataStr)=>{
            // if(err) throw err
            // console.log(dataStr.toString())
            if(err) return reject(err)
            console.log(dataStr)
            resolve(dataStr)
        })
    })
}

getFileByPath("./files/1.txt").then(function(data){
    console.log("then success")
    console.log(data.toString())
},function(err){
    console.log("then failure")
    console.log(err)
});
