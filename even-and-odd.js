function showNumbers(number) {
    let i = 1;
    while (i <= number) {
        let even_odd = (i % 2 == 0) ? "even" : "odd";
        console.log(i, even_odd)
        i++;
    }
}

showNumbers(10);