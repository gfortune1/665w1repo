"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groceries = exports.Grocery = void 0;
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
exports.Grocery = Grocery;
// Create grocery items
var groceries = [
    new Grocery("Milk", 3),
    new Grocery("Bread", 6),
    new Grocery("Eggs", 11),
];
exports.groceries = groceries;
