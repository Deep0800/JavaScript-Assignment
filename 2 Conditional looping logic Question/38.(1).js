//Use pattern in console.log in JS?
//1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += (j % 2 === 0) ? '0 ' : '1 ';
    }
    console.log(row);
}
