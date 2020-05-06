"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// generics　https://typescript-jp.gitbook.io/deep-dive/type-system/generics#jenerikusugenerics
var myStack = new stack_1.Stack();
myStack.push(1);
myStack.push(2);
console.log('Number on top of the stack:', myStack.pop());
// spread, destructuring
var obj1 = {
    first: 'who',
    second: 'what'
};
var obj2 = {
    center: 'because',
    catcher: 'today'
};
var megaObj = __assign(__assign({}, obj1), obj2);
var first = megaObj.first, second = megaObj.second, catcher = megaObj.catcher;
console.log('first', first);
console.log('second', second);
console.log('catcher', catcher);
