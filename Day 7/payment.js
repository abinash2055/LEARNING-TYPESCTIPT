"use strict";
// function created to export data as a function methods for import and export
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayments = addPayments;
exports.getDetails = getDetails;
function addPayments(val) {
    console.log(val);
}
function getDetails() { }
// for default export methods as a class creation
var Payment = /** @class */ (function () {
    function Payment(price) {
        this.price = price;
    }
    return Payment;
}());
exports.default = Payment;
