const fibEo = (n) => {
    n = n.toString().split("").map(Number)
    n = n[n.length-1]
    return ((n % 2) == 0) ? 'even' : 'odd'
}

console.log(fibEo(841645))