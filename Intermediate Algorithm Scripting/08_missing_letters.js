/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    firstChar = str.charCodeAt(0);
    lastChar = str.split('').reverse().join('').charCodeAt(0);
    charCodes = [];
    charArray = [];
    // turn all characters in str into their respective char codes
    for (var i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i));
    }
    // create an array with all character codes from the first character to the last
    for (var i = firstChar; i <= lastChar; i++) {
        charArray.push(i);
    }
    // let's view both arrays we created
    // console.log(charCodes);
    // console.log(charArray);
    // get difference between the two arrays
    for (var i = 0; i < charArray.length; i++) {
        if (charCodes.indexOf(charArray[i]) === -1) {
            return String.fromCharCode(charArray[i]);
        }
    }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("yz"));
