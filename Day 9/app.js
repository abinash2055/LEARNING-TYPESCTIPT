// 1. Type Guards and TypeScript Utility Types
// 1.1 Firstly in normal way
function abcd(arg) {
    if (typeof arg === "number") {
        return "This is number";
    }
    else if (typeof arg === "string") {
        return "This is string";
    }
    else {
        throw new Error("Neither string nor Number");
    }
}
console.log(abcd("This is string value"));
console.log(abcd(534534));
// console.log(abcd(true)); // can't use except number & String
// 2. Using typeof and instanceof
var TvKaRemote = /** @class */ (function () {
    function TvKaRemote() {
    }
    TvKaRemote.prototype.switchTvOff = function () {
        console.log("switching off TV");
    };
    return TvKaRemote;
}());
var CarKaRemote = /** @class */ (function () {
    function CarKaRemote() {
    }
    CarKaRemote.prototype.switchCarOff = function () {
        console.log("switching off Car");
    };
    return CarKaRemote;
}());
var tv = new TvKaRemote();
var car = new CarKaRemote();
function switchOff(device) {
    // type narrowing also called  instance narrowing
    if (device instanceof TvKaRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarKaRemote) {
        device.switchCarOff();
    }
    else {
        throw new Error("None of the Tv or Car Device used here");
    }
}
