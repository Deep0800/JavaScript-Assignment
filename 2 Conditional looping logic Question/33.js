//Write to print Fibonacci series up to given numbers?

function generateFibonacciSeries(n) {
    if (n <= 0) {
        return "Number of terms must be a positive integer.";
    }

    let fibonacciSeries = [];

    if (n >= 1) {
        fibonacciSeries.push(0);
    }
    if (n >= 2) {
        fibonacciSeries.push(1);
    }

    for (let i = 2; i < n; i++) {
        let nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextTerm);
    }

    return fibonacciSeries;
}

let numberOfTerms = 10;

let fibonacciSeries = generateFibonacciSeries(numberOfTerms);

console.log(`Fibonacci series up to ${numberOfTerms} terms: ${fibonacciSeries.join(', ')}`);
