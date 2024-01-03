console.log(stars(5));

function stars(x) {
    for (let i = 0; i < x; i++) {
        let str = ''
        for (let j = 0; j <= i; j++) {
            str += "*"
        }
        console.log(str)
    }
}