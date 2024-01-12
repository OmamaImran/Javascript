const courses=[
    {name:'a', course:'x'},
    {name:'b', course:'y'}
]

const include= courses.find(function(courses){
    return courses.course==='y'
})

const position= courses.findIndex(function(courses){
    return courses.course==='y'
})

console.log(include)
console.log(position)

// CLEANER CODE => arrow function

const include_clean= courses.find(courses => courses.course==='y')

const position_clean= courses.findIndex(courses => courses.course==='y')

console.log(include_clean)
console.log(position_clean) 

