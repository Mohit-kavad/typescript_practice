type Combinable = number | string  // concept of Aliases /Custom Type which we can use everyware in code


function combine(
  input1:Combinable, 
  input2: number | string, // concept of union
  resultConvertion: 'as-number' | 'as-text' // concept of literls
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConvertion === 'as-number' ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
    // if(resultConvertion === 'as-number'){ 
    //     return +result
    // } else{
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 24,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','24','as-number');
console.log(combinedStringAges);


const combinedName = combine("Mohit", "Kavad",'as-text');
console.log(combinedName);

