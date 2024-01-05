let arr = [1, 3, 5, 2, 7, 4, 3, 8, 6, 9]

console.log(max(arr));

function max(arr) {
    return (arr.reduce((a, b) => b > a ? a = b : null))
}