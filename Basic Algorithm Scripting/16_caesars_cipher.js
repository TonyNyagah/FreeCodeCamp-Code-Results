/*
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input 
and returns a decoded string.
*/

function rot13(str) {
    // A to Z are unicode 65 to 90
    var unicodeStr = [];
    var result = [];
    for (var i = 0; i < str.length; i++) {
        unicodeStr.push(str.charCodeAt(i));
    }
    for (var i = 0; i < unicodeStr.length; i++) {
        if (unicodeStr[i] >= 65 && unicodeStr[i] <= 77) {
            result.push(String.fromCharCode(unicodeStr[i] + 13));
        } else if (unicodeStr[i] >= 78 && unicodeStr[i] <= 90) {
            result.push(String.fromCharCode(unicodeStr[i] - 13));
        } else {
            result.push(String.fromCharCode(unicodeStr[i]));
        }
    }
    return result.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); // returns FREE CODE CAMP
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
