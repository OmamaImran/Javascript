const arr=[1,2,3,4,5]

for (let i of arr){
    console.log(i)
}

arr.forEach((number,index) => console.log(index, number))