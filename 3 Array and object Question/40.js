// Write a JavaScript Program to display the current day and time in the following format.
// Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 

const now = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const day = days[now.getDay()];

let hours = now.getHours();
const amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; 

const minutes = now.getMinutes();

const seconds = now.getSeconds();

console.log(`Today is ${day}. Current Time is ${hours} ${amPm}: ${minutes} : ${seconds}`);
