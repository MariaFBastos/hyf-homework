/* Doubling of number
Say you would like to write a program that doubles the odd numbers in an array and throws away the even number */

let numbers = [1, 2, 3, 4];
let filtered  = numbers.filter(num => num % 2 !== 0)
let doubleOdd = filtered.map(num => num * 2)

//debugging
console.log(filtered)
console.log(doubleOdd)

// Working with movies (using array movies at data.js)

/* Create an array of movies containing the movies with a short title (you define what short means) */

let shortTitles = movies.filter(movie => movie.title.length < 10);
console.log(shortTitles);

/* Create an array of movie titles with long movie titles */

let longTitles = movies.filter(movie => movie.title.length > 10);
console.log(longTitles);

/* Count the number of movies made between 1980-1989 (including both the years) */

let yearFilter = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log(yearFilter.length);

/* Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) */

let goodRating = movies.filter(movie => movie.rating >= 7);
let averageRating = movies.filter(movie => movie.rating >= 4 && movie.rating < 7);
let badRating = movies.filter(movie => movie.rating < 4);
console.log(goodRating, averageRating, badRating);

goodRating.forEach(movie => movie.tag = "good")
console.log(goodRating);

averageRating.forEach(movie => movie.tag = "average")
console.log(averageRating);

badRating.forEach(movie => movie.tag = "bad")
console.log(badRating);

/* Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies. */

let higherThan6 = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.title);

/* Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive? */

let keywordsMovies = movies
    .filter(movie => movie.title.toLowerCase().includes("surfer") || movie.title.toLowerCase().includes("alien") || movie.title.toLowerCase().includes("benjamin"))
    console.log(keywordsMovies)
    console.log(keywordsMovies.length)
    
/* Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. */

/* Find the word that is mostly duplicated using sort Optional */

/* Calculate the average rating of all the movies using reduce. Optional */

/* Count the total number of Good, Average and Bad movies using reduce. Optional */

