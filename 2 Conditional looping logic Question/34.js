//Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS

let number = 64728;
let numberStr = number.toString();
let numberArray = numberStr.split('');
let reversedArray = numberArray.reverse();
let reversedStr = reversedArray.join('');
let reversedNumber = parseInt(reversedStr, 10);

console.log(`The reverse of ${number} is ${reversedNumber}`);
