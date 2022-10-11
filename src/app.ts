// decoretors class

function Logger(logString: string) {
  //Decoretor Factories
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering templete");

    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGIN - PERSON")
@WithTemplate("<h1>Hello world!</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating Person Object...");
  }
}

const pres = new Person();
console.log(pres);

// Property Decorators!

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decoretor!");
  console.log(target, propertyName);
}

// Accessor Decoretor!
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method Decorator --> this decorator also tack 3 areguments same as Accessor Decoretor
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter Decorators
//--> third argument is position argument
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log //property decorator
  title: string;
  private _price: number;

  @Log2 //accessor decorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - Should be possitive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3 //method decorator
  getPriceWithTex(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book1", 20);
const p2 = new Product("Book2", 29);
const p3 = new Product("Book3", 34);

console.log(p1, p2, p3);
