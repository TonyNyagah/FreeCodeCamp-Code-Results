/*
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results 
as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

function pairElement(str) {
    // Array to hld the pairs
    var dna = [];
    // Loop through the string
    for (var i = 0; i < str.length; i++) {
        // Switch based on the current letter in the string
        // push an array to dna with the current string in it's pair
        // in the case of 'G' the array would be ['G', 'C']
        // dna would then be [['G', 'C']]
        switch (str[i]) {
            case "G":
                dna.push([str[i], "C"])
                break;
            case "C":
                dna.push([str[i], "G"])
                break;
            case "A":
                dna.push([str[i], "T"])
                break;
            case "T":
                dna.push([str[i], "A"])
                break;
        }
    }
    // return the array
    return dna;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
