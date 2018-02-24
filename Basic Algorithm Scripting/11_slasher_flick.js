/*
Return the remaining elements of an array 
after chopping off n elements from the head.
*/

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2)); // should return [3]
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)); // should return ["cheese", 4]