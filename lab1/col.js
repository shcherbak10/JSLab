'use strict';

let obj1 = new Map();
obj1.set('Peter',3809312).set('John',3121);

function findPhoneByName(name)
{
	return obj1.get(name);
}

console.log(findPhoneByName('Jhn'));