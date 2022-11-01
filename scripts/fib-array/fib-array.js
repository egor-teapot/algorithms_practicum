const fib = (n) => {
    let arr = [0, 1]
    for(i=1; i < n; i++) {
        // prev
        let prev = arr[arr.length-2]
        // next
        arr.push(arr[arr.length-1] + prev)
    }
    return console.log(arr)
}

fib(12)