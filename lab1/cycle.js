'use strict';


function printOdd(start, end)
{
    for(let i = start; i <= end; i++)
    {
        i % 2 != 0 ? console.log(i): i;
    }
}

printOdd(15,30);