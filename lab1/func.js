'use strict';

function average(a,b)
{
    console.log((a+b)/2);
}

function square(x)
{
    return (Math.pow(x,2));
}

function cube(x)
{
    return (Math.pow(x,3));
}


average(cube(3),square(3));