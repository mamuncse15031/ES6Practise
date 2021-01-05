"use strict";

function sum(...x){

    var sum= 0;
    for (let i of x){
        sum = sum+i

    }
    console.log(sum);


}
sum(1,2,4,5,4,4,5,6,8,4,3,5,6,9,8,7,9,4,7)