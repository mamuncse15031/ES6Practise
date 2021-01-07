"use strict";

class myClass{
        
    // parameterised constructor
    constructor(a,b){   

        this.firstNumber = a;    //class variable: works only in the class 
        this.secondNumber = b;
    }

    add(){
        let result = this.firstNumber + this.secondNumber;   // local variable: works only in the method

        console.log(result);
    }
}

var obj = new myClass(10,20);

obj.add();