 // 需求：封装一个方法：给一个读取文件路径，从而读取文件，并把读取的内容返回

const fs=require('fs')
const path=require('path')

// 普通去读文件的方式
// fs.readFile(path.join(__dirname,'./files/1.txt'),"utf-8",(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr)
// })

console.log(path.join(__dirname,""))

// 初衷：给定文件路径，返回文件的内容
// 可以规定一下：callback中有两个参数，第一次参数是失败的结果，第二个的参数是成功的结果
// 同时规定：成功返回的结果位于callback的第二个位置：null，dataStr ;   失败了：error对象，undefined
function getFileByPath(fpath,callback){
    fs.readFile(fpath,"utf-8",(err,dataStr)=>{
        // 如果失败了，if之后的代码没有必要执行
        if(err) return  callback(err)
        console.log(dataStr)
        callback(null,dataStr)
    }) 
}

getFileByPath(path.join(__dirname,"./files/1.txt"),(err,dataStr)=>{
    if(err) return console.log(err.message);
    console.log(dataStr)
})


