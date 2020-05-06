"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this._store = [];
    }
    Stack.prototype.push = function (elem) {
        this._store.push(elem);
    };
    Stack.prototype.pop = function () {
        return this._store.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
