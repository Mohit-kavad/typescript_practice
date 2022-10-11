"use strict";
// decoretors class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    //Decoretor Factories
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("Rendering templete");
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating Person Object...");
    }
};
Person = __decorate([
    Logger("LOGIN - PERSON"),
    WithTemplate("<h1>Hello world!</h1>", "app")
], Person);
const pres = new Person();
console.log(pres);
// Property Decorators!
function Log(target, propertyName) {
    console.log("Property Decoretor!");
    console.log(target, propertyName);
}
// Accessor Decoretor!
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Method Decorator --> this decorator also tack 3 areguments same as Accessor Decoretor
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Parameter Decorators
//--> third argument is position argument
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Price - Should be possitive!");
        }
    }
    getPriceWithTex(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log //property decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2 //accessor decorator
], Product.prototype, "price", null);
__decorate([
    Log3 //method decorator
    ,
    __param(0, Log4)
], Product.prototype, "getPriceWithTex", null);
const p1 = new Product("Book1", 20);
const p2 = new Product("Book2", 29);
const p3 = new Product("Book3", 34);
console.log(p1, p2, p3);
