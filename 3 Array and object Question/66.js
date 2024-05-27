//Find the length of a string without using libraryFunction?

function findStringLength(str) {
    let length = 0;
    for (let char of str) {
        length++;
    }
    return length;
}

const string = "Deep Gandhi";
const length = findStringLength(string);

console.log(length);
