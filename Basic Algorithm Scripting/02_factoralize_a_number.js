function factorialize(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product = product * i;
    }
    return product;
}

console.log(factorialize(3));
