"use strict";

var myMap = new Map();

myMap.set('key1', 'Bangladesh')
myMap.set('key2', 'India')
myMap.set('key3', 'China')
myMap.set('key4', 'USA')
myMap.set('key5', 'UK')
myMap.set('key6', 'Japan')

for(let myValue of myMap.values()){

    console.log(myValue);

}
for(let myKeys of myMap.keys()){

    console.log(myKeys);
}