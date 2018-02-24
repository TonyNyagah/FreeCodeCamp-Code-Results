/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all 
numbers between them.
*/

function sumAll(arr) {
    var myArray = [];
    if (arr[0] < arr[1]) {
        for (var i = arr[0]; i <= arr[1]; i++) {
            myArray.push(i);
        }
    } else {
        for (var i = arr[1]; i <= arr[0]; i++) {
            myArray.push(i);
        }
    }
    return myArray.reduce(function(a, b) {
        return a + b;
    });
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
