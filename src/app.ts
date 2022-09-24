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
  if (typeof a === "string" || typeof b === "string") {
    //concept of type guard
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
