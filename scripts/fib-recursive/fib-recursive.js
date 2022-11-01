const benchmark = require('../../utils/benchmark')

const fib = (n) => {
    if (n <= 1) {return n}
    else {
    return fib(n-1) + fib(n-2)
    // return fib((n-1) + (n-2)) неверный способ вызова, переполняет стек
    } 
}

console.log("3: ", benchmark(fib(3)))
console.log("7: ", benchmark(fib(7)))
console.log("12: ", benchmark(fib(12)))
console.log("20: ", benchmark(fib(20)))
console.log("24: ", benchmark(fib(24)))
