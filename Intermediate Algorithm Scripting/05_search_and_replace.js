/*
Perform a search and replace on the sentence using the arguments 
provided and return the new sentence.
*/

function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
