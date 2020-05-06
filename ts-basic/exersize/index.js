"use strict";
exports.__esModule = true;
var fib_1 = require("./fib");
var stack_1 = require("./stack");
// fibonacchi
console.log(fib_1.fib(fib_1["default"]));
var myCar = {
    wheels: 5,
    color: 'red',
    make: 'toyota',
    model: 'prius'
};
console.log('mycar:', JSON.stringify(myCar));
// generics
var myStack = new stack_1.Stack();
myStack.push(1);
myStack.push(2);
console.log('Number on top of the stack:', myStack.pop());
