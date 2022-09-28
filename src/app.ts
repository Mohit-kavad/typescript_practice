// const names: Array<string> = []; //string[];
// // names[0].split(" ");

// const promise : Promise<string> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello World")
//     },2000)
// })

// promise.then(data =>{
//     console.log(data);
// })

// Creating Geneic functions

let arrNum = [23, 43, 54, 65, 1234];
let arrStr = ["a", "b", "c", "d", "e"];

function getRandomEl<A>(arr: A[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let result: string;
console.log(getRandomEl(arrStr));
console.log(getRandomEl(arrNum));

// working with constrains
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);

// generic functions
type Lengthy = { length: number };

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  /** return tuples type of 1st Elemnt is T and 2nd return type is string */
  let discriptionText = "Got no Element!";
  if (element.length === 1) {
    discriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    discriptionText = `Got ${element.length} Element`;
  }
  return [element, discriptionText]; //returns tuples
}

console.log(countAndDescribe("Hello World!"));
console.log(countAndDescribe(["Hello", "World"]));
console.log(countAndDescribe(""));
// console.log(countAndDescribe(10); // number does not have length property and there for this does not work

// the kyeof constrain

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value : " + obj[key];
}

const obj = extractAndConvert({ name: "Max" }, "name");
console.log(obj);

// Generic Classes

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Mohit");
textStorage.addItem("Manu");
textStorage.removeItem("Mohit");
console.log(textStorage.getItem());

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Manu" });
console.log(objStorage.getItem());
