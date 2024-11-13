// Type Assertion --> to tell TypeScript as particular things that has a certain type as value .
// we use it when coder know more details of that typeof data than TypeScript.
var a = Number("342"); // string to number
console.log(typeof a); // its call as type assertion
console.log(a);
// Type Casting
var b = String(456456); // number to string
console.log(typeof b); // call as type assertion or type casting
console.log(b);
// Non-Null  assertion operator
var d;
// if you are sure its value be string
d = "its string than other type";
// to be sure that its value is string and get string property only
d.slice(3, 9);
console.log(d);
