// Any

let any: any = 'Hello'
any = 123
any = null //any는 무엇이든지 할당이 가능 별로 사용하지는 않음 

// Unknown

const u: unknown = 123

const any1 : any =u // unknown은 any타입만 할당이 가능 

//튜플

const tuple: [string, number, boolean] = ['a',1, false]
const users : [number, string, boolean][] 
    =[[1,'hi', true], [2,'hi2', false]] 

//void
function func (msg: string): void {
    console.log(`Hello ${msg}`)
}
const hi: void = func('world')

//Never -> 절대 발생할 수 없는 값 
const nev: number[] =[]
nev.push(3)

//Union

let union1: string | number 
union1 = 'Hello type!'
union1 = 123


//Intersection 
interface User {
    name: string,
    age: number
}
interface Validation {
    isValid: boolean
}

const jsu: User & Validation = {
    name: 'Neo',
    age: 85,
    isValid: true 
}
