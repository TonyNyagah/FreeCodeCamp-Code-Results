/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because 
all of the letters in the second string are present in the first, 
ignoring case.
*/
function mutation(arr) {
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1)
            return false;
    }

    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
