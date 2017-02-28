/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  /*
  var flattened = arr.reduce(function(flat, toFlatten){
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
  return flattened;
  */
 var flattened = [];
 while(arr.length){
    var value = arr.shift();
    if(Array.isArray(value)){
        arr = value.concat(arr);
    } else{
        flattened.push(value);
    }
 }
 return flattened;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
