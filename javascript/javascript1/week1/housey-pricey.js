/* Peter's House*/
var widePetersHouse = 8;
var deepPetersHouse = 10;
var hightPetersHouse = 10;
var gardenSizeInM2PetersHouse = 100;
var petersHouseCosts = 2500000;

var volumeInMetersPetersHouse = hightPetersHouse*deepPetersHouse*widePetersHouse;

var petersHousePrice = volumeInMetersPetersHouse * 2.5 * 1000 + gardenSizeInM2PetersHouse * 300;

if (petersHousePrice<petersHouseCosts){
    var petersHouse = 'Peter is paying a good price';
}
else{
    var petersHouse = 'Peter is paying too much';
}
console.log (petersHouse);

/* Julia's House*/
var wideJuliasHouse = 5;
var deepJuliasHouse = 11;
var hightJuliasHouse = 18;
var gardenSizeInM2JuliasHouse = 100;
var juliasHouseCosts = 1000000;

var volumeInMetersJuliasHouse = hightJuliasHouse*deepJuliasHouse*wideJuliasHouse;

var juliasHousePrice = volumeInMetersJuliasHouse * 2.5 * 1000 + gardenSizeInM2JuliasHouse * 300

if (juliasHousePrice<juliasHouseCosts){
    var juliasHouse = 'Julia is paying a good price';
}
else{
    var juliasHouse = 'Julia is paying too much';
}
console.log (juliasHouse);