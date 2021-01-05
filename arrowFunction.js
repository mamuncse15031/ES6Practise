"use strict";

var myArrow1=(...a)=>{

    var sum=0;
    for (let i of a){
        sum = sum+i;
    }
    console.log(sum);
}

console.log(myArrow1(1,2,3,4,5,6));
