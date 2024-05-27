//Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS

let number = 1523;
let numberStr = number.toString();
let sumOfDigits = 0;

for (let char of numberStr) {
    sumOfDigits += char - '0';
}

console.log(`The sum of the digits of ${number} is ${sumOfDigits}`);

