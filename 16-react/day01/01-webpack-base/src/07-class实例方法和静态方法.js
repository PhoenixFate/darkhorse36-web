console.log("07")

function Person(name,age){
    this.name=name;
    this.age=age;
}

// info属性，直接挂载给了构造函数，所以它是静态属性
Person.info="aaa"


// 实例方法，可以通过对象. 出来的方法就是实例方法
Person.prototype.say=function(){
    console.log("这是Person的实例方法")
}



// 静态方法
Person.show=function(){
    console.log("这是Person的静态方法：show")
}


const p1=new Person('多多',18);
console.log(p1);
// 通过new出来的实例，访问到的属性，叫做实例属性
console.log(p1.name);
console.log(p1.age);
console.log(p1.info)
p1.say()
console.log(Person)
Person.show();
// 静态属性：通过构造函数，直接访问到的属性，叫做静态属性
console.log(Person.info)


// -------------------使用class关键字来创建对象---------------------

// 创建了一个动物类
// 注意1：在class{ } 内部，只能写构造器，静态方法、静态属性和实例方法（实例属性在构造器中）
// 注意2：class内部还是用原来的Function来实现的；所以，我们把class关键字，称作 语法糖
class Animal{
    // 这是类中的构造器
    // 每一个类中都有构造器
    // 如果没有手动指定构造器，则类内部默认有一个隐形的空构造器
    // 构造器的作用: 每当new的时候，都优先执行构造器中的代码
    constructor(name,age){
        // 实例属性
        this.name=name;
        this.age=age;
    }

    // 在class内部，通过static修饰的属性，就是静态属性
    static info="eeee"


    jiao(){
        console.log("Animal 的实例方法")
    }

    // 这是Animal的静态方法
    static show(){
        console.log("这是Animal的静态show方法")
    }

}


const a1=new Animal('大黄',12);
console.log(a1);
console.log(a1.name);
console.log(a1.age)
console.log(a1.info)
console.log(Animal.info)
a1.jiao();// 这是实例方法
Animal.show();