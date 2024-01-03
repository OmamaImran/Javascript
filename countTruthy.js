let array = [1, 2, "", undefined, 3, 4];
console.log(countTruthy(array));

function countTruthy(array) {
    count = 0;
    for (let i of array) {
        if (i) count++;
    }
    return count;
}