/*
Sum all the prime numbers up to and including the provided number.
*/

function sumPrimes(num) {
    var primeArray = [];
    // loop over all numbers from 2 to the given number
    for (var i = 2; i <= num; i++) {
        prime = true; // this variable is used to signify the number is prime
        // loop over all numbers less than i
        // divide all numbers less than i by all those below them i.e. j
        for (var j = 2; j < i; j++) {
            // if i can be divided by any number below it and not leave a remainder,
            // it is not a prime number
            if (i % j === 0) {
                prime = false;
            }
        }
        // all numbers that haven't been flagged as not being prime are accepted here
        if (prime) {
            // push the number into the prime array 
            primeArray.push(i);
        }
    }
    // add up everything in the primeArray with reduce()
    return primeArray.reduce(function(total, sum) {
        return total + sum;
    });
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
