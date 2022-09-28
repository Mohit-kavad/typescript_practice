// type intersection

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //--> type intersection

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //==> number

function add(a: Combinable, b: Combinable) {
  //concept of type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// type Guares
type UnkownEmployee = Employee | Admin; //union type
function printEmployeeInformation(empInfo: UnkownEmployee) {
  console.log(
    `Name : ${empInfo.name}`
  ); /*we will get name properties without any 
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
  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehical(vehical: Vehical) {
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

// Discriminated Unions

interface Bird {
  type: "bird"; // having one common propertes in every object that is know as discriminated unions
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

//index properties

interface ErrorContainer {
  [prop: string]: string; // here prop type is string and poro value's type is also stritng
}

const errorBag: ErrorContainer = {
  email: "Not valid email",
  username: "Must start with a capital character!",
};

// function overloading

function add1(a: number, b: number): number; // we dont need to
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(a: string, b: string): string;
function add1(a: Combinable, b: Combinable) {
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
const storedData =
  usrIn ?? "DEFAULT"; /**when its left-hand side operand is null or undefined,
        and otherwise returns its left-hand side operand. if value is empty 
        then return as the empty string is not null or undefined */
console.log(storedData);
