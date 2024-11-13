// 1. Type Guards and TypeScript Utility Types
// 1.1 Firstly in normal way
function abcd(arg: string | number) {
  if (typeof arg === "number") {
    return "This is number";
  } else if (typeof arg === "string") {
    return "This is string";
  } else {
    throw new Error("Neither string nor Number");
  }
}
console.log(abcd("This is string value"));
console.log(abcd(534534));
// console.log(abcd(true)); // can't use except number & String

// 2. Using typeof and instanceof
class TvKaRemote {
  switchTvOff() {
    console.log("switching off TV");
  }
}

class CarKaRemote {
  switchCarOff() {
    console.log("switching off Car");
  }
}
const tv = new TvKaRemote();
const car = new CarKaRemote();

function switchOff(device: TvKaRemote | CarKaRemote) {
  // type narrowing also called  instance narrowing
  if (device instanceof TvKaRemote) {
    device.switchTvOff();
  } else if (device instanceof CarKaRemote) {
    device.switchCarOff();
  } else {
    throw new Error("None of the Tv or Car Device used here");
  }
}
