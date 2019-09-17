'use strict';

let arr = [{
    name: 'Peter',
    phone: 3809312
},
{
    name: 'John',
    phone: 3121
}];

function findPhoneByName(name)
{
    let number = -1;
    arr.forEach(element => {
        name.toLocaleLowerCase() == element.name.toLocaleLowerCase() ? number=element.phone : 1;
    });
    return number;
}

console.log(findPhoneByName('peter'));