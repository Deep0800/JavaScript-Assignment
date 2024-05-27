// Write a JavaScript program to calculate days left until next Christmas? 

const today = new Date();
const currentYear = today.getFullYear();
let christmasThisYear = new Date(currentYear, 11, 25); 

if (today > christmasThisYear) {
    christmasThisYear = new Date(currentYear + 1, 11, 25);
}

const diffInMilliseconds = christmasThisYear - today;
const daysUntilChristmas = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

console.log(`There are ${daysUntilChristmas} days left until next Christmas.`);
