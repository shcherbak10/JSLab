'use strict';

const obj1 = {
    name: 'Vlad'
};

let obj2 = {
    name: 'Vlad'
};

let obj3 = {
    name: 'John'
};
/*Поля обьекта можно менять т.к. не меняется ссылка на обьект*/
obj1.name = 'Ivan';
obj2.name = 'Peter';

//obj1=obj3; - ошибка, изменение ссылки на обьект

obj2=obj3;
console.log(obj1.name+' '+obj2.name);

function createUser(name, city)
{
    return {Name:name, City:city};
}

let newUser = createUser('John','London');
console.log(newUser.Name+' '+newUser.City);