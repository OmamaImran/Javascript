const arr1=[6,4,8,2,3,5,0]

console.log(arr1.sort())

const arr2=[
    {id:2, name:'Node.js'},
    {id:1, name:'javasript'},
    {id:3, name:'React.js'}
]

const name_sorted= arr2.sort(function(a,b){
    a.name= a.name.toLowerCase();
    b.name=b.name.toLowerCase();
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    else return 0;
})

console.log(name_sorted)

const id_sorted= arr2.sort(function(a,b){
    if (a.id<b.id) return -1;
    if (a.id>b.id) return 1;
    else return 0;
})

console.log(id_sorted)