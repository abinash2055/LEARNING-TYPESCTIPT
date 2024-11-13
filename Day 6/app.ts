// Generic --> one function that is been created and accepts those values of any type and print it.........
// create function that says function argument has types as treated it
// below code in normal way
function logger(a: any) {}
logger(" Hey Normal way");
logger(123);
logger(true);
logger(undefined);
logger(null);

// below code in Generic methods as Generic function
function abcd<T>(a: T) {}
abcd<string>("Hey Generic Methods");
abcd<number>(12345);
abcd<boolean>(false);
abcd<null>(null);
abcd<undefined>(undefined);

function gen<H>(a: H, b: string, c: number) {}
gen<string>("Generics", "part 2", 2);

function log<T>(val: T) {
  console.log(val);
}
log("Hey");
log(231);

// Generic interfaces
interface Practice<T> {
  name: string;
  age: number;
  key: T;
}
function inter(obj: Practice<string>) {}
inter({ name: "Footy", age: 34, key: "unique" });

// Generic classes
class BottleMaker<T> {
  constructor(public key: T) {}
}

let b1 = new BottleMaker<string>("Class in Bottle Maker");
let b2 = new BottleMaker<number>(123);

console.log(b1);
console.log(b2);
console.log(b1, b2);

// Facts
function fact1<T>(a: T, b: T): T {
  return a; // as normal single value return
}
fact1<string>("Hey", "Hello");

function fact2<T>(a: T, b: T): T {
  return b; // as normal single value return
}
fact2<string>("Hey", "Hello");

function fact3<T>(a: T, b: T): T {
  return "Hey" as T; // it doesn't allow due to string literal so new method used
}
fact3<string>("Hey", "Hello");

function fact4<T>(a: T, b: T): T {
  return <T>"Hey"; // it doesn't allow due to string literal so latest new method is used
}
fact4<string>("Hey", "Hello");
