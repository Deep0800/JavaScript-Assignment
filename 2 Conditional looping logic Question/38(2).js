// A
// B C
// D E F
// G H I J
// K L M N O

let startChar = 'A';
let numberOfRows = 5;
let currentChar = startChar;

for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += currentChar + ' ';
        currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }
    console.log(row);
}

