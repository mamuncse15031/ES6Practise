"use strict";

//return function

function funOne(){

    return 20;
}

function funTwo(){

    return funOne();
}

console.log(funOne()+funTwo());