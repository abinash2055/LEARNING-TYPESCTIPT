// A.... Type Inference
// TS automatically infer type of variable as number
let a = 12;

// TS automatically infer type of variable as string
let b = "lion";

// B.... Understanding type interfaces and Aliasing
// 1. definition of interface
// 2. using interfaces to define object shape
interface User {
  name: string; // required field
  email: string; // required field
  password: string; // required field
  gender?: string; // optional field
}

function getDataOfUser(obj: User) {
  console.log(obj);
}

getDataOfUser({
  name: "Personal Signature",
  email: "test@cam.com",
  password: "shut3443",
});

// 3. extending interfaces
// also contain property of User
// if 2 interfaces of same name created then they merged and shows as if they are single..
interface Admin extends User {
  admin: boolean;
}
function getDataOfAdmin(adminData: Admin) {
  console.log(adminData);
}

getDataOfAdmin({
  name: "Admin man",
  email: "admin@test.com",
  password: "rgt6gf6rf",
  admin: true,
});

// 4. type aliases
// it created user known type for any string
type sankhya = number;
let g: sankhya;

type value = string | number | null;

function abcd(input?: value) {
  console.log(input);
}
abcd("Don");
abcd(23);
abcd();

// 5. intersection types
// 5.1 Union
type Dancer = {
  name: string;
  email: string;
};

type barDancer = Dancer & {
  getDetails(Dancer: string): void;
};

function van(a: barDancer) {
  a.getDetails;
}
// 5.2 Intersection
// no same function can be created

// C.... Type annotations
let c: number;
c = 34;

let d: string;
d = "king";

let y: string | boolean;
y = "tony";
y = true;
