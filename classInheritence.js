"use strict";

class parent{

    hello1(){
        console.log("Hello 1 is parent class");
    }
    hello2(){

        console.log("Hello 2 is a parent class");
    }
}
class child extends parent{


}

var obj = new child();

obj.hello1();
obj.hello2();