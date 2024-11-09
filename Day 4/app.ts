// Classes and Objects

// class definition
class Device {
  name = "LG";
  price = "12000";
  category = "Digital";
}
let d1 = new Device();

// Constructors
// --> ek machine jo ki produce kar rhi hai final consumable(use)  product --> no real data but helps to make real data(real data maker)
class BottleMaker {
  constructor(
    public brand: string,
    public price: number,
    public color: string,
    public material: string
  ) {}
}
let b1 = new BottleMaker("Milton", 1200, "Brown", "Steal");
let b2 = new BottleMaker("Camel", 400, "Transparent", "Plastic");

class HumanMaker {
  age = 0;
  constructor(public name: string, public isHandsome: boolean) {}
}
let h1 = new HumanMaker("Danny", true);

class Music {
  public name: string;
  public artist: string;
  public thumbnail: string;
  public length: number;
  public free: boolean;
  constructor(
    name: string,
    artist: string,
    thumbnail: string = "some-thumbnail.jpg",
    length: number,
    free: boolean
  ) {
    this.name = name;
    this.artist = artist;
    this.thumbnail = thumbnail || "some-thumbnail.jpg";
    this.length = length;
    this.free = free;
  }
}
let m1 = new Music("Coder Singer", "Donny Roi", "", 1299, false);
let m2 = new Music("Code Sing", "Ronny Roi", "Raj.jpg", 1458, true);
m2.name = "Code Sing changed to Go On";

// this Keyword
class Learn {
  name = "Krishna";
  changeSomeStuff() {
    this.name;
    console.log(this.name);
    this.changeSomeMoreStuff;
  }
  changeSomeMoreStuff() {
    console.log("Hey Changer");
  }
}

// Access modifiers ( public, private, protected )
class GlassMaker {
  protected material = "Gold"; // other class can also used it
  private Data: string = "Data"; // only used in that class

  constructor(public name: string) {}
}

class MetalGlassMaker extends GlassMaker {
  public material = "Aluminum";

  constructor(name: string) {
    super(name);
  }

  getValue() {
    console.log(this.name);
    console.log(this.material);
  }
}
let g1 = new MetalGlassMaker("Milton");
g1.getValue();

// Readonly property --> doesn't change initial value only says but it changes value
class User {
  constructor(public readonly name: string) {}
  // below code is written to show only
  // changeName() {
  //   this.name = "HellYou";
  // }
}
let u1 = new User("Ronny");
// u1.changeName(); // created to show only

// Optional property
class Person {
  constructor(
    public name: string,
    public age: number,
    public gender?: string
  ) {}
}
let p1 = new Person("Wow", 23, "male");
let p2 = new Person("Don", 56);

// Parameter property
class Parameter {
  constructor(public name: string, public age: number) {}
}

// Getter and Setter
class Practice {
  constructor(public _name: string, public _age: number) {}
  // For Getter
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  // For Setter
  set name(value: string) {
    this._name = value;
  }
  set age(value: number) {
    this._age = value;
  }
}
let P1 = new Practice("Practice", 34);

// Static members --> no need to create instant
class Library {
  static version = 1.54;
  static getRandomNumber() {
    return Math.random();
  }
}

// Abstract classes and methods
abstract class Animal {
  constructor(public name: string) {}
  abstract makeSound(): void;

  introduce() {
    console.log(`Hi, I am a ${this.name}.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Meow! Meow!");
  }
}
const myDog = new Dog("Buddy");
myDog.introduce(); // Hi, I am a Buddy.
myDog.makeSound(); // Woof! Woof!

const myCat = new Cat("Whiskers");
myCat.introduce(); // Hi, I am a Whiskers.
myCat.makeSound(); // Meow! Meow!
