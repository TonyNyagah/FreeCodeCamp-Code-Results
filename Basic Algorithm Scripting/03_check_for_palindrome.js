function palindrome(str) {
    var newStr = str.replace(/[\W_]/g, '').toLowerCase();
    var reverseString = newStr.split('').reverse().join('');
    return reverseString === newStr;
}

console.log(palindrome("eye"));