const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2018, rating: 4.5 },
]
sorted = []
ratings = []

for (let i of movies) {
    if (i.year === 2018) {
        sorted.push(i)
        ratings.push(i.rating)
    }
}


console.log(sorted)
console.log(ratings)
