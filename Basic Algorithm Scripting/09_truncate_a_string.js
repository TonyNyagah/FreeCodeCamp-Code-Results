/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, maxLength) {
    var splitStr = str.split('');
    if (maxLength <= 3) {
        return splitStr.slice(0, maxLength).join('') + '...';
    } else if (splitStr.length > maxLength) {
        return splitStr.slice(0, maxLength - 3).join('') + '...';
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));