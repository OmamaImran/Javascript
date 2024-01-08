//using loop
console.log("using loop:")
let x = 5;
let answer = 1;
for (let i = 1; i <= x; i++) {
    answer *= i;
}
console.log(answer)

//using recursion
console.log("using recursive function:")
let ans = 1
function fact(a) {
    if (a > 1) {
        ans *= a;
        fact(--a);
    }
    return ans;
}
console.log(fact(5))
