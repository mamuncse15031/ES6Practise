"use strict";

class parent{

    hello1(){
        console.log("Hello 1 Function");
    }
    hello2(){

        console.log("Hello 2 functions");
    }
}
class child extends parent{

    hello1(){
        console.log("Method overriding in hello 1");
    }

}

var obj = new child();

obj.hello1();
obj.hello2();