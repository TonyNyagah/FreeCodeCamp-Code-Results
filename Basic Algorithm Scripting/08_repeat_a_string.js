function repeatStringNumTimes(str, num) {
    var myArray = [];
    for (i = 0; i < num; i++) {
        myArray.push(str);
    }
    return myArray.join('');
}

console.log(repeatStringNumTimes("abc", 3));