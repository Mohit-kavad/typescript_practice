"use strict";
// type intersection
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    //concept of type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(empInfo) {
    console.log(`Name : ${empInfo.name}`); /*we will get name properties without any
          problem because both Objec has same
          propertie which is name:string for that reason have to use type Guard*/
    if ("privileges" in empInfo) {
        /** here in keyword check that => privileges is in empInfo? */
        console.log(`previlege : ${empInfo.privileges}`);
    }
    if ("startDate" in empInfo) {
        console.log(`starting date : ${empInfo.startDate}`);
    }
}
// printEmployeeInformation(e1);
printEmployeeInformation({ name: "Mohit", startDate: new Date() });
// Type has another type of type guard
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a Truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehical(vehical) {
    vehical.drive();
    if ("loadCargo" in vehical) {
        vehical.loadCargo(1000);
    }
    //   if (vehical instanceof Truck) {  //--->> second method which is instenceof but we can not use with interface
    //     vehical.loadCargo(1000);
    //   }
}
useVehical(v2);
useVehical(v1);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at Speed : " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 20 });
moveAnimal({ type: "horse", runningSpeed: 50 });
const errorBag = {
    email: "Not valid email",
    username: 'Must start with a capital character!'
};
function add1(a, b) {
    //concept of type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const storedVal = add1(22, 3);
console.log(storedVal);
// Nullish Colescing
const usrIn = null;
const storedData = usrIn !== null && usrIn !== void 0 ? usrIn : "DEFAULT";
console.log(storedData);
