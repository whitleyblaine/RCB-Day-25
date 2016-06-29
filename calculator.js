// Takes in all of the command line arguments
var inputString = process.argv

// Parses the command line argument to capture the "operand"
var operand = inputString[2];
var num1 = parseFloat(inputString[3]);
var num2 = parseFloat(inputString[4]);

if (operand == 'add') {
  console.log(num1+num2);
} else if (operand === 'multiply') {
  console.log(num1*num2);
} else if (operand === 'divide') {
  console.log(num1/num2);
} else if (operand === 'subtract') {
  console.log(num1-num2);
} else if (operand === 'remainder') {
  console.log(num1%num2);
} else if (operand === 'exp') {
  console.log(Math.pow(num1, num2));
} else {
  console.log('Please use either add, multiply, divide, remainder, or subtract');
}