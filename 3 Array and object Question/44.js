//Write a JavaScript program to capitalize first letter of a string?

function capitalizeFirstLetter(str) {
    if (!str) {
        return str;
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const inputString = 'deep';

const capitalizedString = capitalizeFirstLetter(inputString);

console.log(capitalizedString);
