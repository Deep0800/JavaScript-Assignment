//Write to print factorial of given number?

function factorial(n) {
  if (n < 0) {
      return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}

let number = 5;

let fact = factorial(number);

console.log(`The factorial of ${number} is ${fact}`);
