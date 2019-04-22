const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

let firstWord = '';
let smallestWord = '';
function findSmallWord(arr) {
    for ( i = 0; i < arr.length; i++ ){
        firstWord = arr[0];
         
        if(arr[i].length < firstWord.length){
            smallestWord = arr[i];
        } 
    }
    return smallestWord
  }

findSmallWord(danishWords); // returns 'ø'