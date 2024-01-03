function Address(house_no, area, city, country){
    this.house_no =house_no,
    this.area =area,
    this.city =city,
    this.country =country
}

const address1= new Address('a','b','c','d')
const address2= new Address('a','b','c','d')

function areEqual(address1,address2){
    return address1.house_no === address2.house_no &&
    address1.area===address2.area && address1.city===address2.city &&
    address1.country===address2.country
}

function areSame(address1,address2){
    return address1===address2
}

console.log(areEqual(address1,address2))
console.log(areSame(address1,address2))