console.log("02")

// 父类
// 可以直接把父类理解为原型对象prototype
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}



class American extends Person{

}

const a1=new American("jack",23)
console.log(a1)

class Chinese extends Person{
 
}

const c1=new Chinese("张三",22)
console.log(c1)

