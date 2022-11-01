const benchmark = require('../../utils/benchmark')

const fib = (n) => {
    const a = (1 + 5 ** 0.5) / 2;
    return (a ** n / 5 ** 0.5);
}

console.log("3: ", benchmark(fib(3)))
console.log("7: ", benchmark(fib(7)))
console.log("18: ", benchmark(fib(18)))
console.log("32: ", benchmark(fib(32)))
console.log("64: ", benchmark(fib(64)))