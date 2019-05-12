/* Movies exercise
This exercise is repetition of array functions.

Fetch movies from this api: https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json */

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then((movies) => {
    // 1. Create an array of bad movies
    let badMovies = movies.filter(movie => movie.rating < 4);
    console.log(badMovies);

    // 2. Create an array of bad movies since year 2000
    let badMovies2000s = movies.filter(movie => movie.rating < 4 && movie.year >= 2000);
    console.log(badMovies2000s);

    // 3. Create an array of the titles of the bad movies since year 2000
    let badMoviesTitles2000s = badMovies2000s.map(movie => movie.title);
    console.log(badMoviesTitles2000s);
});

/* Promise that resolves after set time
Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

Here is an example: makeUpYourOwnFunctionName(3) will return a promise that resolves after 3 seconds.

Use the makeUpYourOwnFunctionName to log out the string I am called asynchronously after 6 seconds. */

function afterSetTime(resolveAfter){
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve('I am called asynchronously after ' + resolveAfter + ' seconds');
        }, resolveAfter*1000);
    });
}
afterSetTime(3)

/* Fetching and waiting
Only using promises



Fetch some data from an api.
After that data has been fetched, wait 3 seconds
Log out the data from the api
Optional Now do all of these things using chaining */

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then((dog) => {
    console.log(dog)

    let dogImg = dog.message;
    setTimeout(() => {
        console.log(dogImg);
    }, 3000);       
});