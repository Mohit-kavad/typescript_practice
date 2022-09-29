// decoretors class

function Logger(logString: string) {
  //Decoretor Factories
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGIN - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person Object...");
  }
}

const pres = new Person();

function logData(message: string): ClassDecorator {
  console.log(`Message is: ${message}`);
  return function (target: Function): void {
    console.log(target);
  };
}

@logData("Hello world")
class User {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
