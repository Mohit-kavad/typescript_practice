function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // this is non typeScript way where have to put if condition for validation isNum or Not
  // if(typeof n1 !== "number" || typeof n2 !== "number" ){
  //     throw new Error("incorect input")
  // }
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

  return n1 + n2;
}

const num1 = 3;
const num2 = 24.4;
const printResult = true;
const resultPhrase = "Result is : ";
add(num1, num2, printResult, resultPhrase);
