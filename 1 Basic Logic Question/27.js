//Write to find minimum number among 3 numbers using ternary operator in JS?

let num1 = 10;
let num2 = 15;
let num3 = 12;

let min = num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
console.log("The maximum number: ", min);