//인터페이스 

interface User11 {
    name: string
    age: number
    isValid?: boolean
}

const neo: User11 = {
    name: 'NEO' ,
    age: 102
} 
// 물음표를 추가했기 때문에 isValid가 없어도 된다.
// 함수 타입 - 호출 시그니처 


interface User12 {
    name: string 
    age: number
    getName: (message : string) => string
}

const fff: User12 =  {
    name: "fff",
    age:85,
    getName(message: string) {
        console.log(message)
        return this.name
    }
}
fff.getName('Hello')

//배열 인덱스 시그니처 
interface Fruits {
    [item: number]: string 
}

const fruits: Fruits = ['APPLE', 'BANANA', 'CHERRY']
console.log(fruits[1])


//2

interface Payload1 {
    [key: string] : unknown 
}

function logValues(payload: Payload1) {
    for(const key in payload) {
        console.log(payload[key])
    }
}

interface User15 {
    [key: string]: unknown
    name:string
    age:number
    isValid: boolean
}

const ddd: User15 = {
    name:"hh",
    age:90,
    isValid:true
}
logValues(ddd)
//객체 
interface User14 {
    [key: string]: unknown
    name: string 
    age: number
}
const dd: User14 = {
    name: 'dd',
    age:85
}
dd['isValid'] = true
dd['emails'] = ['naver@naver.com','naver1@naver.com']
console.log(dd)


//인터페이스 확장 

interface User16 {
    name: string 
    age:number
}

interface User17 extends User16 {
    isValid: boolean
}

const rr: User17 = {
    name:"rr",
    age:60,
    isValid: true
}


// 인터페이스 중복 

interface Fullname {
    firstName: string 
    lastName: string 
}

interface Fullname {
    middleName: string
    //lastname은 다른 속성으로 중복될 수 없음 
}

const fullname: Fullname = {
    firstName:"hi",
    middleName:"hi1",
    lastName:"hi3"
}
