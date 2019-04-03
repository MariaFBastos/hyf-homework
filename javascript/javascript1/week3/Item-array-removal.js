const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write some code here

function removeNumber(){    
    const randomNumber = parseInt(Math.random() * 11);
    var randomNumberIndex = numbersArray.indexOf(randomNumber);
    numbersArray.splice(randomNumberIndex,1);
}
removeNumber()

console.log(numbersArray)

// Second part

function removeAgainNumber(){
    console.log("Nuhbubububy");
    var numbersToRemove = 3
    for (let i=0; i < numbersToRemove; i++){
        const randomNumber = parseInt(Math.random() * 11);
        var randomNumberIndex = numbersArray.indexOf(randomNumber);
        numbersArray.splice(randomNumberIndex,1);  
    }
}

removeAgainNumber()
console.log(numbersArray)














