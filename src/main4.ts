//타입 가드 

function logText(el: Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1') 
if (h1El instanceof HTMLHeadingElement) {
    logText(h1El)
}

function add5(val: string | number | boolean) {
    let res = 'Result => '
    if (typeof val === 'number') {
        res += val.toFixed(2)
    } 
    if (typeof val === 'string') {
        res += val.toUpperCase()
    } 
    if (typeof val === 'number') {
        res += val.toFixed(2)
    } 
    console.log(res)
}

add5(3.141592)
add5('hello world')