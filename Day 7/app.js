"use strict";
//1... Modules
Object.defineProperty(exports, "__esModule", { value: true });
//2... Exporting and importing modules
// 2.1.  Importing data as a function methods
var payment_1 = require("./payment");
(0, payment_1.addPayments)(123);
//3... Default exports
var payment_2 = require("./payment");
var a = new payment_2.default(123);
console.log(a);
var b = new payment_2.default(1223);
console.log(b);
console.log("to print value of both a and b at ones");
console.log(a, b);
