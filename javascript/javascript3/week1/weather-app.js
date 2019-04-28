//WEATHER APP
//Functionalities: Get input city, show message if input is blank, show loading progress
//https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=3949c2fb9b9fa05acb48e5be78206531

const result = document.getElementById('result');
document.getElementById('button').addEventListener('click', getCityWeather);

let city = '';
let country = '';

function getCityWeather(){
    city = document.getElementById('cityInput').value;
    const trimCity = city.toLowerCase().trim();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+trimCity+'&appid=3949c2...'

    fetch(url)
    .then(response => response.json()) //1st promise , execute json
    .then((weather) => { //2nd promisse, when the data is ready, execute this function
        
        //API variables
        let temp        = weather.main.temp;
        let description = weather.weather[0].description;
        let icon        = weather.weather[0].icon;
        let iconUrl     = 'http://openweathermap.org/img/w/'+icon+'.png'
        let wind        = weather.wind.speed
        let cloudyPerc  = weather.clouds.all
        let sunrise     = weather.sys.sunrise  // Sunrise time, unix, UTC
        let sunset      = weather.sys.sunset   // Sunset time, unix, UTC
            country     = weather.sys.country  // Extra feature
        
        //Parse time variables
        const sunriseTime = new Date(sunrise * 1000);
        const sunriseTimeStamp = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(sunset * 1000);
        const sunsetTimeStamp = sunsetTime.toLocaleTimeString();

        //K-273.15
        const tempCelsius = (temp - 273.15).toFixed(0);

        //This is the extra feature
        let flagImg = document.getElementById('flag');
            flagImg.src = 'https://www.countryflags.io/'+country+'/flat/64.png';
            flagImg.style.width = '64px';
            flagImg.style.height = '64px';
        
        //DOM variables
        let cityP = document.getElementById('city');
            cityP.innerHTML = 'city: '+ trimCity;
        
        let tempP = document.getElementById('temp');
            tempP.innerHTML = 'temperature: '+ tempCelsius + '&#176; C'; 

        let descP =  document.getElementById('description');
            descP.innerHTML = 'Description: '+description;
        
        let windP =  document.getElementById('wind');
            windP.innerHTML = 'Wind Speed: ' +wind;
                
        let img = document.getElementById('icon');
            img.style.width = '64px'
            img.src = iconUrl;

        let cloudyP =  document.getElementById('cloudy');
            cloudyP.innerHTML = 'Cloudy: ' +cloudyPerc+ '%';
            
        let sunriseP = document.getElementById('sunrise');
            sunriseP.innerHTML = 'Sunrise: ' + sunriseTimeStamp;

        let sunsetP = document.getElementById('sunset');
            sunsetP.innerHTML = 'Sunset: ' + sunsetTimeStamp;
            

        //debugging
        console.log(trimCity);
        console.log(country);
        console.log(sunriseTime);
        console.log(sunriseTimeStamp);
        console.log(sunsetTime);
        console.log(sunsetTimeStamp);
        console.log(temp);
        console.log(description);
        console.log(icon);
        console.log(iconUrl);
        console.log(wind);
        console.log(cloudyPerc);
        console.log(sunrise);
        console.log(sunset);
 
    });  
    
};