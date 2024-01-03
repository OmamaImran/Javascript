console.log(primes(20));

function primes(x) {
    for (let i = 2; i <= x; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) { prime = false; }
        }
        if (prime === true) { console.log(i) }
    }
}