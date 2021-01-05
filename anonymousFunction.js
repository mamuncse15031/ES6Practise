"use strict";

var myFun = function(...x){

    var sum = 0;
    for(let i of x){
        sum = sum+i;

    }
    console.log(sum);
    
}
myFun(1,2,3,4,5);