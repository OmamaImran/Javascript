const address={
    house_no:'a',
    area:'b',
    city:'c',
    country: 'd'
}

function showAddress(address){
    for (let key in address){
        console.log(key, address[key])
    }
}

showAddress(address);