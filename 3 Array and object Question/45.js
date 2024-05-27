// Write a JavaScript program to determine if a variable is array?

function isArray(variable) {
    return Array.isArray(variable);
}

console.log(isArray([]));
console.log(isArray([1, 2, 3])); 
console.log(isArray({}));
console.log(isArray('string'));
console.log(isArray(123)); 
