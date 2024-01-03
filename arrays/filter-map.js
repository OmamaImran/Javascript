const number=[3,5,1,-9,8,-5]

const filtered= number.filter(n => n>=0);
console.log(filtered)

const sorted= filtered.sort()
console.log(sorted)

const items= sorted.map(n => '<li>'+n+'</li>')
console.log(items)

const names=['omama','aimon','aiza']
const sentences= names.map(name=> 'my name is '+ name)
console.log(sentences)
