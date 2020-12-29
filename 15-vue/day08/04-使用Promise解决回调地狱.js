const fs=require('fs')


function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,(err,dataStr)=>{
            // if(err) throw err
            // console.log(dataStr.toString())
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}


// 先读取文件1 再读取文件2 再读取文件3
// 通过.then指定回调函数的时候，成功的回调函数必须传，失败的回调函数可以不传
// 在上一个.then中返回一个新的promise，可以继续用下一个.then来处理
// 如果前面的promise执行失败，我们不想让后面的promise操作被终止，可以为每个promise
// 指定失败的回调
getFileByPath('./files/12.txt')
.then(function(data){
    if(data){
        console.log(data.toString())
    }
    return getFileByPath('./files/2.txt')
},function(err){
    console.log(err.message)
    return getFileByPath('./files/2.txt')
})
.then(function(data){
    if(data){
        console.log(data.toString())
    }
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    if(data){
        console.log(data.toString())
    }
})
             

console.log("okokokok")


// 我们有这样的需求: 前面的promise失败了，但是不要影响后续promise的正常执行
// 此时，我们可以单独为每个promise通过.then 指定一下失败的回调；

// 需求2：和上面的需求相反：如果后续的promise执行 依赖于前面的promise执行的结果，如果前面的promise执行失败了，后续的promise不执行
// 一旦有报错，终止所有promise的执行
getFileByPath('./files/11.txt')
.then(function(data){
    if(data){
        console.log(data.toString())
    }
    return getFileByPath('./files/2.txt')
})
.then(function(data){
    if(data){
        console.log(data.toString())
    }
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    if(data){
        console.log(data.toString())
    }
})
// catch的作用： 如果前面的任何的promise执行失败，则立即终止所有的promise执行，并立即进入catch中处理promise抛出的异常
.catch(function(err){
    console.log("--------catch-----------")
    console.log(err.message)
})