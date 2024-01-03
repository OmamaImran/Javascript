let array1 = [80, 90, 90];
console.log(grade(array1));

function grade(array) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    if (average < 60) { return "F"; }
    else if (average < 70) { return "D"; }
    else if (average < 80) { return "C"; }
    else if (average < 90) { return "B"; }
    else { return "A" }
}