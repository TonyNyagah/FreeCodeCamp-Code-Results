/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str.replace(/[\s_]/g, "-").replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show")); // "the-andy-griffith-show"
console.log(spinalCase("AllThe-small Things")); // "all-the-small-things"
console.log(spinalCase("HahaYouStillFailAtSpinalTabCase")); 