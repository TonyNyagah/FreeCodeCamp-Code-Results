/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    var toRemove = [];
    for (var i = 1; i < args.length; i++) {
        toRemove.push(args[i]);
    }
    var finalArray = args[0].filter(function(el) {
        return toRemove.indexOf(el) < 0;
    });
    return finalArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
