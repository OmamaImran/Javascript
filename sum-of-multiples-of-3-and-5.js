console.log(sum(10));

function sum(x) {
    let count = 0;
    for (let i = 0; i <= x; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            count += i;
        }
    }
    return count;
}