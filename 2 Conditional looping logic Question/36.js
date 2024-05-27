//Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: - 5) in JS

// Given number
let number = 1234;

let numberStr = number.toString();

let firstDigit = numberStr[0] - '0';

let lastDigit = numberStr[numberStr.length - 1] - '0';

let sumOfFirstAndLast = firstDigit + lastDigit;

console.log(`The sum of the first and last digits of ${number} is ${sumOfFirstAndLast}`);
