//1... Modules

//2... Exporting and importing modules
// 2.1.  Importing data as a function methods
import { addPayments, getDetails } from "./payment";
addPayments(123);

//3... Default exports
import Payment from "./payment";
let a = new Payment(123);
console.log(a);
let b = new Payment(1223);
console.log(b);
console.log("to print value of both a and b at ones");
console.log(a, b);
