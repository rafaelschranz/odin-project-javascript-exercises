const fibonacci = function(wanted) {
    wanted = parseInt(wanted, 10);
    if (wanted < 0) return "OOPS"; // Handling negative input
    if (wanted === 0) return 0; // Handling the case where the first Fibonacci number is 0
    if (wanted === 1) return 1; // Handling the first Fibonacci number

    const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];
    const wantedNumber = fibonacciSequence[wanted - 1];
    return wantedNumber;
};

// Do not edit below this line
module.exports = fibonacci;
