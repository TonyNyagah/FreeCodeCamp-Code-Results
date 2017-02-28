/*
Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in 
the range between these parameters.
*/

function smallestCommons(arr) {
    // sort the numbers in the arr array
    var range = arr.sort();
    // create an array to hold numbers from arr[0] to arr[1]
    var array = [];

    // loop over all numbers between arr[0] and arr[1]
    for (var i = arr[0]; i <= arr[1]; i++) {
        array.push(i);
    }

    var x = true;
    var LCM = 0;

    while (x) {
        LCM++;
        for (var j = array[0]; j <= array[array.length - 1]; j++) {
            if (LCM % j !== 0) {
                break;
            } else if (j == array[array.length - 1]) {
                x = false;
            }
        }
    }
    // console.log(array.length, array);
    return LCM;
}


console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([23, 18])); // 6056820
console.log(smallestCommons([1, 13])); // 360360
