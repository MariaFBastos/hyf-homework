const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

let firstWord = '';
let smallestWord = '';
function findSmallWord(arr) {
    for ( i = 0; i < arr.length; i++ ){
        firstWord = danishWords[0];
         
        if(danishWords[i].length < firstWord.length){
            smallestWord = danishWords[i];
        } 
    }
    return smallestWord
  }

findSmallWord(danishWords); // returns 'ø'