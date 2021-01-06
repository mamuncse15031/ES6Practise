"use strict";

var myMap = new Map();

myMap.set("key1", 'Bangladesh')
myMap.set("key2", 'India')
myMap.set("key3", 'China')
myMap.set("key4", 'USA')
myMap.set("key5", 'UK')
myMap.set("key6", 'Japan')

myMap.delete("key3");
myMap.delete("key5");


for(let myValue of myMap.values()){

    console.log(myValue);

}
//myMap.clear();

console.log(myMap.get("key6"));

if(myMap.has("key10")){

    console.log("Yes");
}
else{

    console.log("No");
}