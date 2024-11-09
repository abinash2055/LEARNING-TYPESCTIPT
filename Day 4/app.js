// Classes and Objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class definition
var Device = /** @class */ (function () {
    function Device() {
        this.name = "LG";
        this.price = "12000";
        this.category = "Digital";
    }
    return Device;
}());
var d1 = new Device();
// Constructors
// --> ek machine jo ki produce kar rhi hai final consumable(use)  product --> no real data but helps to make real data(real data maker)
var BottleMaker = /** @class */ (function () {
    function BottleMaker(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200, "Brown", "Steal");
var b2 = new BottleMaker("Camel", 400, "Transparent", "Plastic");
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return HumanMaker;
}());
var h1 = new HumanMaker("Danny", true);
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "some-thumbnail.jpg"; }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail || "some-thumbnail.jpg";
        this.length = length;
        this.free = free;
    }
    return Music;
}());
var m1 = new Music("Coder Singer", "Donny Roi", "", 1299, false);
var m2 = new Music("Code Sing", "Ronny Roi", "Raj.jpg", 1458, true);
m2.name = "Code Sing changed to Go On";
// this Keyword
var Learn = /** @class */ (function () {
    function Learn() {
        this.name = "Krishna";
    }
    Learn.prototype.changeSomeStuff = function () {
        this.name;
        console.log(this.name);
        this.changeSomeMoreStuff;
    };
    Learn.prototype.changeSomeMoreStuff = function () {
        console.log("Hey Changer");
    };
    return Learn;
}());
// Access modifiers ( public, private, protected )
var GlassMaker = /** @class */ (function () {
    function GlassMaker(name) {
        this.name = name;
        this.material = "Gold"; // other class can also used it
        this.Data = "Data"; // only used in that class
    }
    return GlassMaker;
}());
var MetalGlassMaker = /** @class */ (function (_super) {
    __extends(MetalGlassMaker, _super);
    function MetalGlassMaker(name) {
        var _this = _super.call(this, name) || this;
        _this.material = "Aluminum";
        return _this;
    }
    MetalGlassMaker.prototype.getValue = function () {
        console.log(this.name);
        console.log(this.material);
    };
    return MetalGlassMaker;
}(GlassMaker));
var g1 = new MetalGlassMaker("Milton");
g1.getValue();
// Readonly property --> doesn't change initial value only says but it changes value
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var u1 = new User("Ronny");
// u1.changeName(); // created to show only
// Optional property
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var p1 = new Person("Wow", 23, "male");
var p2 = new Person("Don", 56);
// Parameter property
var Parameter = /** @class */ (function () {
    function Parameter(name, age) {
        this.name = name;
        this.age = age;
    }
    return Parameter;
}());
// Getter and Setter
var Practice = /** @class */ (function () {
    function Practice(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Practice.prototype, "name", {
        // For Getter
        get: function () {
            return this._name;
        },
        // For Setter
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Practice.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Practice;
}());
var P1 = new Practice("Practice", 34);
// Static members --> no need to create instant
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.getRandomNumber = function () {
        return Math.random();
    };
    Library.version = 1.54;
    return Library;
}());
// Abstract classes and methods
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.introduce = function () {
        console.log("Hi, I am a ".concat(this.name, "."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow! Meow!");
    };
    return Cat;
}(Animal));
var myDog = new Dog("Buddy");
myDog.introduce(); // Hi, I am a Buddy.
myDog.makeSound(); // Woof! Woof!
var myCat = new Cat("Whiskers");
myCat.introduce(); // Hi, I am a Whiskers.
myCat.makeSound(); // Meow! Meow!
