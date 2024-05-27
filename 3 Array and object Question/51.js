// Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,
// mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

function getCurrentDate(format) {
    const currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    const year = currentDate.getFullYear();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    switch (format) {
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        case 'mm/dd/yyyy':
            return `${month}/${day}/${year}`;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;
        case 'dd/mm/yyyy':
            return `${day}/${month}/${year}`;
        default:
            return 'Invalid format';
    }
}

console.log(getCurrentDate('mm-dd-yyyy')); 
console.log(getCurrentDate('mm/dd/yyyy'));
console.log(getCurrentDate('dd-mm-yyyy')); 
console.log(getCurrentDate('dd/mm/yyyy')); 

