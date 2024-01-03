const person = {
    name: "omama",
    age: 21,
    education: "bachelors"
}

console.log(showProperties(person));

function showProperties(x) {
    for (let key in x) {
        if (typeof (x[key]) === "string") {
            console.log(key, x[key])
        }
    }
}