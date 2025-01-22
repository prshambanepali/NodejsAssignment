class person{

    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    display(name,age)
    {
        console.log(`Hi,my name is ${this.name} and I am ${this.age} years old.`)
    }
}
let x= new person('Ram',99)
x.display()