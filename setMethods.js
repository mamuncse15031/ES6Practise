"use strict";

var mySet = new Set();

mySet.add('Bangladesh');
mySet.add('India');
mySet.add('Nepal');
mySet.add('India');
mySet.add('Bhutan');
mySet.add('India');

mySet.delete('India');  //delete methods

console.log(mySet.values()); //values mathod
console.log(mySet.size);  //set size

if(mySet.has('Pakistan')){

    console.log('Yes');
}
else{

    console.log('No');
}

mySet.clear(); //clear method