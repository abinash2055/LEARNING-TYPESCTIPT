// Functions
function abcd(): string {
  return "It returns string value";
}

// Function Types
function practice(name: string, callback: (value: string) => void) {}
practice("name as string", (value: string) => {
  console.log(value);
});

function abcdef(name: string, age: number, callback: (arg: string) => void) {
  callback("string as argument'arg'");
}
abcdef("string value", 56, (arg: string) => {
  console.log("abcdef &&", arg);
});

// Optional and default parameters
function optional(
  name: string,
  age: number,
  gender: string = "don't disclose easily"
) {
  console.log(name, age, gender);
}
optional("old name", 56, "male");
optional("new name", 15, "female");
optional("child name", 26);

// Rest parameters --> if '...' use hai then single arguments contain array of number
function rest(...arg: number[]) {}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

function sum(...arr: number[]) {
  console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

// Spread parameters --> creating duplicate array
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [...arr1];

// Overloads --> create function signature
function over(a: string): void;
function over(a: string, b: number): number;

function over(a: any, b?: any) {
  if (typeof a === "string" && b === undefined) {
    console.log("first function");
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  } else throw new Error("Something is Wrong");
}
over("only string");
over("second only with number", 34);
