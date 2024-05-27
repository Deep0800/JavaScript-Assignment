// How can you convert the string of any base to an integer in JavaScript?

const binaryString = "101010";
const binaryInteger = parseInt(binaryString, 2);
console.log(binaryInteger); 

const octalString = "52";
const octalInteger = parseInt(octalString, 8);
console.log(octalInteger); 

const hexString = "2A";
const hexInteger = parseInt(hexString, 16);
console.log(hexInteger);
