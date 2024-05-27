// Write a JavaScript exercise to get the extension of a filename.

let filename1 = "document.txt";
let filename2 = "document.png";

let lastDotPosition = filename1.lastIndexOf('.') && filename2.lastIndexOf('.');

let fileExtension1 = (lastDotPosition === -1) ? '' : filename1.substring(lastDotPosition + 1);
let fileExtension2 = (lastDotPosition === -1) ? '' : filename2.substring(lastDotPosition + 1);

console.log(`The extension of the file is: "${fileExtension1}"`);
console.log(`The extension of the file is: "${fileExtension2}"`);
