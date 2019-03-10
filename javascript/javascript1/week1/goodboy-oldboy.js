var dogYearOfBirth = 2011;
var dogYearFuture = 2027;
var dogYear = dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears = (dogYearFuture - dogYearOfBirth) * 7;
var humanYears = 'Your dog will be '+dogYear+' human years old in '+dogYearFuture+'';
var dogYears = 'Your dog will be '+shouldShowResultInDogYears+' dog years old in '+dogYearFuture+'';
console.log (humanYears);
console.log (dogYears);