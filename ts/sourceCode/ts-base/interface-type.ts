interface SearchFunc {
    (source:string,subString:string):boolean
}
let mySearch:SearchFunc

mySearch = function(source:string,subString:string):boolean{
    let result = source.search(subString)
    return result >-1
}

interface StringArray {
    [index:number]:string
}
let myArray:StringArray
myArray = ['Bob','Fred']
let myStr:string = myArray[0]



interface ClockConstructor{
    new (hour:number,minute:number):ClockInterface
}
interface ClockInterface {
    tick()
}
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
      return new ctor(hour,minute)  
    }
class DigitalClock implements ClockInterface{
        constructor(h:number,m:number){}
        tick(){
            console.log('beep beep')
        }
}
class AnalogClock implements ClockInterface{
    constructor(h:number,m:number){}
    tick(){
        console.log('tick tick')
    }
}

let digital = createClock(DigitalClock,12,17)
let analog = createClock(AnalogClock,7,32)

// interface DogConstructor{
//     new (hour:number,minute:number)
// }
// class Dog implements DogConstructor{
//     currentTime:Date
//     constructor(h:number,m:number){}
// }


interface Shape {
    color:string
}
interface Square extends Shape{
    sideLength:number
}
let square = {} as Square

square.color = 'blue'
square.sideLength = 10


interface Counter {
    (start:number):string
    interval:number
    reset():void
}
function getCounter():Counter{
    let counter = (function(start:number){}) as Counter
    counter.interval = 123
    counter.reset  = function(){}
    return counter
}