/*
Convert the given number into a roman numeral.
*/
function convertToRoman(num) {
    // empty string
    var roman = "";
    // array of posible roman numerals up to 1000
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // array of possible number values
    var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    // iterate for a length of our numbers array
    for (var i = 0; i < numbers.length; i++) {
      while (num>=numbers[i]) {
        roman = roman + romanNumeral[i];
        num = num - numbers[i];      }
    }
    return roman;
}

console.log(convertToRoman(1316)); // "MCCCXVI"
console.log(convertToRoman(9)); // "IX"
console.log(convertToRoman(83)); // "LXXXIII"


