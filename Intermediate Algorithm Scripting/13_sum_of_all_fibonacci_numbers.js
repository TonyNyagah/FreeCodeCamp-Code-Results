/*
Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num.
*/

function sumFibs(num) {
    var fibArray = [];
    var oddFibArray = [];
    var first = 0, second = 1, sum = 1;
    
    for (var i = 0; i <= num; i++) {
        if (sum <= num) {
            fibArray.push(sum);
        }
        sum = first + second;
        first = second;
        second = sum;
    }
    // console.log(fibArray);
    for (var j = 0; j < fibArray.length; j++) {
        if (fibArray[j] % 2 !== 0) {
            oddFibArray.push(fibArray[j]);
        }
    }
    // console.log(fibArray);
    // console.log(oddFibArray);

    if (oddFibArray.length <= 1) {
        return num;
    } else {
        return oddFibArray.reduce(function(total, sum) {
            return total + sum;
        })
    };
}


console.log(sumFibs(1)); // a number
console.log(sumFibs(4)); // 5
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(15)); // 23
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(75025)); // 135721
