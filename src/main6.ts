//타입별칭 

type TypeA = string 
type TypeB = string | number | boolean
type User20 = {
    name: string 
    age:number
    isValid: boolean
} | [string, number, boolean]

const userAB: User20 = {
    name:'Neo',
    age:85,
    isValid: true
}

const userG: User20 = ['Evan', 36, false]

function someFunc(param: TypeB) : TypeA {
    switch(typeof param) {
        case 'string':
            return param.toUpperCase()
        case 'number': 
            return param.toFixed(2)
        default: 
            return 'boolean!' //문자열 데이터만 반환해야함 true false가 나올 수 없음 
    } 
}

//함수 오버로딩 

function add11 (a: string, b:string): string 
function add11 (a: number, b: number): number 
function add11 (a: any, b :any ) {
    return a + b
}

add11('hello', 'world')
add11(1,2)
//add11('hello', 2) 이것은 위에 해당하는 구조가 없기 떄문에 오류가 나오게 된다
