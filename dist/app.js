"use strict";
// decoretors class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    //Decoretor Factories
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating Person Object...");
    }
};
Person = __decorate([
    Logger("LOGIN - PERSON")
], Person);
const pres = new Person();
function logData(message) {
    console.log(`Message is: ${message}`);
    return function (target) {
        console.log(target);
    };
}
let User = class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
User = __decorate([
    logData("Hello world")
], User);
const user = new User("John", "Doe");
