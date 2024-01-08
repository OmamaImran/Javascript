function sum(...args) {
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5))


function discount(off, ...prices) {
    let total = prices.reduce((a, b) => a + b)
    return total * (1 - off)
}
console.log(discount(0.3, 10, 20))