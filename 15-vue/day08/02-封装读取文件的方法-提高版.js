 // 需求：封装一个方法：给一个读取文件路径，从而读取文件，并把读取的内容返回

 const fs=require('fs')
 const path=require('path')

 function getFileByPath(fpath,successCallback,errorCallback){
     fs.readFile(fpath,"utf-8",(err,dataStr)=>{
         if(err) return  errorCallback(err)
         successCallback(dataStr)
     }) 
 }
 
//  getFileByPath(path.join(__dirname,"./files/12.txt"),function(data){
//     console.log(data)
//  },function(err){
//     console.log(err)
//  })

// 需求：先读取文件1，再读取文件2，再读取文件3
// 多层回掉： 回调地狱 
// 使用es6中的promise来解决回调地狱的问题
// Promise的本质要干什么：就是单纯的解决回调地狱，并不能减少代码量
getFileByPath(path.join(__dirname,"./files/1.txt"),(data)=>{
    console.log(data)
    getFileByPath(path.join(__dirname,"./files/2.txt"),(data)=>{
        console.log(data)
        getFileByPath(path.join(__dirname,"./files/3.txt"),(data)=>{
            console.log(data)
        },(error)=>{
            console.log(error)
        })
    },(error)=>{
        console.log(error)
    })
},(error)=>{
    console.log(error)
})
 
 
 