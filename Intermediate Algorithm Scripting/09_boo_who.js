/*
Check if a value is classified as a boolean primitive. Return true or false.
*/

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof(bool) === "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(true); // true
console.log(booWho(1)); // false
console.log(booWho([].slice)); // false
