console.log("List in the argument:", sum([1, 2, 3, 4, 5, 6]))
console.log("Arguments:", sum(1, 2, 3, 4, 5, 6))

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]]
    }
    return items.reduce((a, b) => a + b);
}