const addNumbers= (a,b) => a + b

const firstNumber = parseInt(process.argv[2]);
const secondNumber = parseInt(process.argv[3]);
const sum = addNumbers(firstNumber, secondNumber);
console.log(sum);
