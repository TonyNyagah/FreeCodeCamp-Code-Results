function findLongestWord(str) {
  var splitWord =  str.split(' ');
  var maxLength = 0;
  // var longest;

  for(var i = 0; i < splitWord.length; i++){
    // console.log(splitWord[i]);
    if(splitWord[i].length > maxLength){
        maxLength = splitWord[i].length;
        // longest = splitWord[i];
    }
  }
  console.log(maxLength);
}

findLongestWord("The quick brown fox jumped over the lazy dog");