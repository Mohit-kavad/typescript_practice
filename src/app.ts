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

// Property Decorators
function Log(target:any,propertyName:string |Symbol){
  console.log('Property Decoretor!');
  console.log(target,propertyName);
  
}

class Product {
  @Log
  title: string;
  private _price: number;
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
  getPriceWithTex(tax: number) {
    return this._price * (1 + tax);
  }
}
