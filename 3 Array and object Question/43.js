// Write a JavaScript program to convert an array of objects into CSV string?

function convertArrayToCSV(array) {
    const headers = Object.keys(array[0]);

    let csv = headers.join(',') + '\n';

    for (let obj of array) {
        const values = headers.map(header => {
            let value = obj[header];
            if (typeof value === 'string' && value.includes(',')) {
                value = `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        });
        csv += values.join(',') + '\n';
    }

    return csv;
}

const data = [
    { Name: 'Deep', Age: 23, City: 'Navsari' },
    { Name: 'Shiv', Age: 23, City: 'Surat' },
    { Name: 'Aayush', Age: 24, City: 'Bangalore' }
];

const csvString = convertArrayToCSV(data);
console.log(csvString);
