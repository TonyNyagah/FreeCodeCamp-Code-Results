/*
Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(array1, array2) {
    var newArr = [];
    for (var i = 0; i < array1.length; i++) {
        //console.log(array1[i]);
        if (array2.indexOf(array1[i]) === -1) {
            newArr.push(array1[i]);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        //console.log(array2[i]);
        if (array1.indexOf(array2[i]) === -1) {
            newArr.push(array2[i]);
        }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // ["diorite", "pink wool"]
