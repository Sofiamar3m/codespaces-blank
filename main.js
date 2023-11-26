const x = 4
const i = 5
const sum = x + i 
console.log("the result is ", sum)
function add(a, b){
    return a + b 
}
console.log(add(add(1,2),3))
function fibonacci(a){
    if (a<=2){
        return 1
    }else {
        return fibonacci(a-1)+fibonacci (a-2)
    }
}
console.log(fibonacci (8))