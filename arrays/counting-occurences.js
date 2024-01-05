let arr = [1, 2, 4, 5, 1, 3, 1, 1, 1, 1, 1, 2];
console.log(count(arr, 1))

function count(arr, number) {
    // let count = 0;
    // for (let i of arr) {
    //     if (i === number) {
    //         count++;
    //     }
    // }
    // if (count === 0) {
    //     return -1
    // }
    // else {
    //     return count;
    // }

    return arr.reduce((a, b) => b === number ? a + 1 : a + 0)
}

