const benchmark = require('../../utils/benchmark')

const fib = (n) => {
    let prev = 0, next = 1
    for(i=0; i < n; i++) {
        let temp = next
        next = prev + temp
        prev = temp
    }
    return prev
}

console.log("3: ", benchmark(fib(3)))
console.log("7: ", benchmark(fib(7)))
console.log("12: ", benchmark(fib(12)))
console.log("20: ", benchmark(fib(20)))
console.log("24: ", benchmark(fib(24)))