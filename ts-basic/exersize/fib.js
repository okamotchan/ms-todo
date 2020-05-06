"use strict";
exports.__esModule = true;
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
exports.fib = fib;
var Fibconst = 6;
exports["default"] = Fibconst;
