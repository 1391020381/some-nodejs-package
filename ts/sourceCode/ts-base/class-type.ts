class Greeter{
    greeting:string
    constructor(message:string){
        this.greeting = message
    }
    greet(){
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')
console.log('greeter:',greeter)

class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    move(disance:number = 0){
        console.log(`Animal moved ${disance}m`)
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    bark(){
        console.log('W')
    }
}
const dog = new Dog('Tom')
dog.bark()
dog.move(10)