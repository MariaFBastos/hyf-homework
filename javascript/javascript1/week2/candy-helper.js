var boughtCandyPrices = [];

function addCandy (candyType, weight){
    if(candyType === 'sweet'){
        boughtCandyPrices.push(weight * 0.5);
    }
    else if (candyType === 'chocolate'){
        boughtCandyPrices.push(weight * 0.7);
    }
    else if (candyType === 'toffee'){
        boughtCandyPrices.push(weight * 1.1);
    }
    else if (candyType === 'chewing-gum'){
        boughtCandyPrices.push(weight * 0.03);
    }
}
addCandy('sweet',20)
addCandy('chocolate',20)
addCandy('toffee',20)
addCandy('gum',20)
console.log(boughtCandyPrices)

var amountToSpend=Math.random()*100

function canBuyMoreCandy(){
    var buyMoreCandy = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++){
         buyMoreCandy += boughtCandyPrices[i];
    }
    if (buyMoreCandy<amountToSpend){
        return "You can buy more, so please do!";
    }
    else {
        return "Enough candy for you!";
    }
}