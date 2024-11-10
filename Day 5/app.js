var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Functions
function abcd() {
    return "It returns string value";
}
// Function Types
function practice(name, callback) { }
practice("name as string", function (value) {
    console.log(value);
});
function abcdef(name, age, callback) {
    callback("string as argument'arg'");
}
abcdef("string value", 56, function (arg) {
    console.log("abcdef &&", arg);
});
// Optional and default parameters
function optional(name, age, gender) {
    if (gender === void 0) { gender = "don't disclose easily"; }
    console.log(name, age, gender);
}
optional("old name", 56, "male");
optional("new name", 15, "female");
optional("child name", 26);
// Rest parameters --> if '...' use hai then single arguments contain array of number
function rest() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// Spread parameters --> creating duplicate array
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = __spreadArray([], arr1, true);
function over(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("first function");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("Something is Wrong");
}
over("only string");
over("second only with number", 34);
