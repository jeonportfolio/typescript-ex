//타입 추론(Inference) - '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어냄 
// 1)초기화된 변수 
// 2)기본값이 설정된 매개 벼눗 
// 3)반환 값이 있는 함수 

//기본값이 지정된 매개변수 b + 반환 값이 확실한 함수 
function add3(a: number, b = 2) {
    return a + b
} 

//타입 단언 (단언 키워드 as) 
const el = document.querySelector('body') as HTMLBodyElement
el.textContent = 'Hello World' // 여기서 as HTMLBodyElement가 없다면 el이 null일수도 있다고 판단하여 오류 

//Non-null 단언 연산자 
const el1 = document.querySelector('body') 
el1!.textContent = 'Hello World' 

function getNumber(x: number | null | undefined) {
    return Number((x as number).toFixed(2))
}
// toFixed 함수에서 null과 undefined이면 사용불가


function getNumber1(x: number | null | undefined) {
    if(x){
        return Number(x.toFixed(2))
    }
}

function getValue(x: string | number, isNumber: boolean) {
    if(isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase() 
}
getValue('hello world', false)
getValue(3.145926535, true)


//할당 단언 

let num!: number  // num에 값을 넣어야 하는데 값이 없어서 오류 느낌표 붙여서 할당단언
console.log(num)
