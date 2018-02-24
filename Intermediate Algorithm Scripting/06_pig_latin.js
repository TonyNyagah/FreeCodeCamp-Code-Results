/*
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end
*/

function translatePigLatin(str) {
    // regular expression to check vowels  
    var regex = /[a,e,i,o,u]/gi;
    // checks if the first letter is a vowel and adds "way" to the word 
    if (str[0].match(regex)) {
        return str + "way";
    } else {
        // Find how many consonants before the first vowel.
        var vowelIndices = str.indexOf(str.match(regex)[0]);
        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        return str.substr(vowelIndices) + str.substr(0, vowelIndices) + "ay";
    }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
