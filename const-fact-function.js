function factory(house_no, area, city, country){
    return{
        house_no,
        area,
        city,
        country
    }
}

console.log(factory('a','b','c','d'))


function Construct(house_no, area, city, country){
    this.house_no =house_no,
    this.area =area,
    this.city =city,
    this.country =country
}

console.log(new construct('a','b','c','d'))
