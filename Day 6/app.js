// Generic --> one function that is been created and accepts those values of any type and print it.........
// create function that says function argument has types as treated it
// below code in normal way
function logger(a) { }
logger(" Hey Normal way");
logger(123);
logger(true);
logger(undefined);
logger(null);
// below code in Generic methods as Generic function
function abcd(a) { }
abcd("Hey Generic Methods");
abcd(12345);
abcd(false);
abcd(null);
abcd(undefined);
function gen(a, b, c) { }
gen("Generics", "part 2", 2);
function log(val) {
    console.log(val);
}
log("Hey");
log(231);
function inter(obj) { }
inter({ name: "Footy", age: 34, key: "unique" });
// Generic classes
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Class in Bottle Maker");
var b2 = new BottleMaker(123);
console.log(b1);
console.log(b2);
console.log(b1, b2);
// Facts
function fact1(a, b) {
    return a; // as normal single value return
}
fact1("Hey", "Hello");
function fact2(a, b) {
    return b; // as normal single value return
}
fact2("Hey", "Hello");
function fact3(a, b) {
    return "Hey"; // it doesn't allow due to string literal so new method used
}
fact3("Hey", "Hello");
function fact4(a, b) {
    return "Hey"; // it doesn't allow due to string literal so latest new method is used
}
fact4("Hey", "Hello");
