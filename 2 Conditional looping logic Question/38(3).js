// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let startNumber = 1;
let numberOfRows = 5;
let currentNumber = startNumber;

for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += currentNumber + ' ';
        currentNumber++;
    }
    console.log(row);
}
