/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

function truthCheck(collection, pre) {
    return collection.every(function(val) {
        return Boolean(val[pre]);
    });
}

/* es6
function truthCheck(collection, pre) {
    var allTrue = collection.every(val => Boolean(val[pre]));
    return allTrue;
}
*/


console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"));
