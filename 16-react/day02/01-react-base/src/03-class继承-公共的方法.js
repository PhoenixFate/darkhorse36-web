console.log("02")

// 父类
// 可以直接把父类理解为原型对象prototype
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log("大家好")
    }
}



class American extends Person{
    constructor(name,age,president){
        // 1. 一定要在constructor中调用super()，并且在第一行调用
        // 子类通过extends继承父类，在子类的constructor中一定要先调用一下super()
        // 2. super()是一个函数，父类的构造器的引用
        
        super(name,age);
        this.president=president;
    }
}

const a1=new American("jack",23,"trump")
console.log(a1)
a1.sayHello();

class Chinese extends Person{
 
}

const c1=new Chinese("张三",22)
console.log(c1)
c1.sayHello()
