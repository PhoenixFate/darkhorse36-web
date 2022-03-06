console.log("06");

function Person(name,age){
    this.name=name;
    this.age=age;
}

// info属性，直接挂载给了构造函数，所以它是静态属性
Person.info="aaa"

const p1=new Person('多多',18);
console.log(p1);
// 通过new出来的实例，访问到的属性，叫做实例属性
console.log(p1.name);
console.log(p1.age);
console.log(p1.info)

// 静态属性：通过构造函数，直接访问到的属性，叫做静态属性
console.log(Person.info)


// -------------------使用class关键字来创建对象---------------------

// 创建了一个动物类
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


}


const a1=new Animal('大黄',12);
console.log(a1);
console.log(a1.name);
console.log(a1.age)
console.log(a1.info)
console.log(Animal.info)