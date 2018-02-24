/*
Write a function that splits an array (first argument) into groups 
the length of size (second argument) and returns them 
as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArray = [];
    for (var i = 0; i < arr.length; i = i + size) {
        newArray.push(arr.slice(i, i + size));
    }

    return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]])