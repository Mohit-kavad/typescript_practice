function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is : " + num);
}
printResult(add(2, 34));

// function as Types

let combineValues: (a: number, b: number) => number; //--> here number is return type

combineValues = add;
// combineValues = 5; // will get run time ERROR! because of combine value is not a function whene combineValues type is not Function
// combineValues = printResult; 
console.log(combineValues(29, 43));


// callbacks & function type

function addAndHandle(n1:number,n2:number,cb:(num:number)=> void ){
    const result = n1 + n2 ;
    cb(result);
}

addAndHandle(10,20, (result)=>{
    console.log(result); 
})