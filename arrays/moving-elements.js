let arr = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(move(arr, 3, -3));

function move(array, element, offset) {
    if (element + offset > arr.length || element + offset < 0) {
        return console.error("Invalid input")
    }
    else {
        let x = array.splice(element, 1)[0];
        let final = [
            ...array.slice(0, element + offset),
            x,
            ...array.slice(offset + element)
        ]
        return final;
    }
}