// Write a JavaScript program to clone an array?

function cloneArray(arr) {
    return arr.slice();
}

const originalArray = [1, 2, 3];
const clonedArray = cloneArray(originalArray);
console.log(clonedArray);
