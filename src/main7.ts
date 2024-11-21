//클래스 

//접근제어자 
//public- 어디에서나 자유롭게 접근 가능, 클래스 바디에서 생략가능 
//protected - 나와 파생된 후손 클래스 내에서 접근 가능 
//private - 내 클래스에서만 접근 가능 

class UserUI {
   
    constructor(
        public first: string, 
        protected last: string, 
        private age: number
    ){
        this.first = first
        this.last = last
        this.age = age 
    }
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}

class UserUA extends UserUI {
    getAge() {
        return `${this.first} ${this.last} `
    }
}
// last는  파생된 클래스여서 사용가능 age는 사용불가 

const nnn = new UserUI('NEO', 'Anderson', 102) 
console.log(nnn.first)


// 제네릭 

interface Obj {
    x:number 
}

type Arr = [number, number]

function toArray<T>(a: T, b:T) {
    return [a,b]
} // 타입 이름은 T와 같이 아무렇게나 정해도 된다 a에 먼저 들어가는 타입으로 할당 

console.log(
    toArray('Neo', 'Anderson'),
    toArray(1,2), //여기서 T에 a에 해당하는 속성이 b까지됨 a가 1이었으므로 b도 number type
    toArray({ x:1 }, { x:2 }), //x타입의 객체만 들어올 수 있음 
    toArray<Arr>([1,2],[3,4])//배열안 숫자가 2개만 들어가는 튜플형식
)
