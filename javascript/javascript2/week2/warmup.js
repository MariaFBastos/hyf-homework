// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(function(){
    console.log("Called after 2.5 seconds");
}, 2500);

/* Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments. */

let setTimeOut2;

function printMessageDelay (timer, message){
    setTimeOut2 = setTimeout(()=>console.log (message), timer);
}
printMessageDelay(3500, 'Called after 3.5 seconds. **EXERCISE 2**');

/* Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: 3.5 seconds after button is clicked 3.5 seconds after the button is clicked. */

let buttonDelay = document.getElementById("buttonDelay");
    buttonDelay.onclick = function() {
        printMessageDelay(2000, 'called after 2 secs. **EXERCISE 3**');
};

/* Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function. */

let earth = function(){console.log('This is the Earth. **EXERCISE 4**')}
let saturn = function(){console.log('This is the Saturn. **EXERCISE 4**')}

function logFuncs(planetLogFunction){
    if (planetLogFunction == earth) {
        earth();
    } else if (planetLogFunction == saturn){
        saturn();
    } else {
        console.log('we couldnt find this planet function. **EXERCISE 4**')
    }    
}

//debugging
logFuncs(earth);
logFuncs(saturn);

/* Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) */

const div    = document.getElementById('loadLocation')
const pLat   = document.createElement('p')
const pLong  = document.createElement('p')
const button = document.getElementById('buttonLocation')

let lat;
let long;

button.addEventListener('click', function(){

    navigator.geolocation.getCurrentPosition(function(position) {

        lat  = position.coords.latitude.toFixed(2);
        long = position.coords.longitude.toFixed(2);

        pLat.innerHTML  = 'This is the latitude '  + lat;    
        pLong.innerHTML = 'This is the longitude ' + long;    

    });

    div.appendChild(pLat);
    div.appendChild(pLong);

});

/* Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions */

function runAfterDelay(delay, callback){
    let setTimeOut3 = setTimeout(callback, delay);
}

runAfterDelay(5000, saturn)

/* Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa. */

function jokeCreator(shouldTellFunnyJoke, fn1, fn2){
    
    if (shouldTellFunnyJoke === true){
        logFunnyJoke();
    } else if (shouldTellFunnyJoke === false){
        logBadJoke();
    } else {
        console.log('Sorry we could not find it')
    }
}

function logFunnyJoke(){
    console.log('You called the Funny Function :)')
}

function logBadJoke(){
    console.log('You called the bad Function :(')
}