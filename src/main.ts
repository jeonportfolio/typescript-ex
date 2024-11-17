/// 배열 

const union: (string|number)[] = ['Apple', 1, 2, 'Banana',3]
const array: [] = [] //빈배열만 가능 

///객체타입 

interface User {
    name: string
    age: number
    isValid: boolean
}
const userA: User = {
    name :'hi',
    age : 40,
    isValid: true
}

//함수 

const add: (x: number, y: number) => number = function (x,y) {
    return x + y
}


const add2 = function (x: number,y: number): number {
    return x + y
}

const a: number = add(1,2)

const hello: () => void = function() {
    console.log('Hello World~')
}

const hello2 = function():void {
    console.log('Hello World~')
}

const h: void = hello()

