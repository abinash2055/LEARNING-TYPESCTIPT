"use strict";
// A.... Type Inference
// TS automatically infer type of variable as number
let a = 12;
// TS automatically infer type of variable as string
let b = "lion";
function getDataOfUser(obj) {
    console.log(obj);
}
getDataOfUser({
    name: "Personal Signature",
    email: "test@cam.com",
    password: "shut3443",
});
function getDataOfAdmin(adminData) {
    console.log(adminData);
}
getDataOfAdmin({
    name: "Admin man",
    email: "admin@test.com",
    password: "rgt6gf6rf",
    admin: true,
});
let g;
function abcd(input) {
    console.log(input);
}
abcd("Don");
abcd(23);
abcd();
function van(a) {
    a.getDetails;
}
// 5.2 Intersection
// no same function can be created
// C.... Type annotations
let c;
c = 34;
let d;
d = "king";
let y;
y = "tony";
y = true;
