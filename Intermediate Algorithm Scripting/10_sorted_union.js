/*
Write a function that takes two or more arrays and returns a 
new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in 
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but 
the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
    // turn the arguments into an array  
    var args = arr.slice.call(arguments);
    // create a final array to store your results
    var finalArray = [];
    // loop over the arguments
    for(var i = 0; i < args.length; i++){
        var arrayArguments = args[i];
        // loop over content of the arguments
        for(var j = 0; j < arrayArguments.length; j++){
            // console.log(arrayArguments[j]);
            var indexValue = arrayArguments[j];
            // check if value is already in the final array
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // [1, 3, 2, [5], [4]]
