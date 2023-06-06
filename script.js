//& save the units and the city to a var
//~ State
let currCity = 'Laurelton';
// let currCity = 'Tokyo';
// let currCity = 'Seoul';
let units = 'metric'; 

// & Get the HTML elements using the Selectors
let city = document.querySelector('.weather__city');

let datetime = document.querySelector('.weather__datetime');

let weather__forecast = document.querySelector('.weather__forecast');

let weather__temperature = document.querySelector('.weather__temperature');

let weather__icon = document.querySelector('.weather__icon');

let weather__minMax = document.querySelector('.weather__minMax');

let weather__realFeel = document.querySelector('.weather__realFeel');

let weather__humidity = document.querySelector('.weather__humidity');

let weather__wind = document.querySelector('.weather__wind');

let weather__pressure = document.querySelector('.weather__pressure');

// & Search -> want to be able to enter a city and the values will change for that respective city 
// ~ get the document -> listen for a submit 
// once submit the form want to get the value in the search bar then update the var with that value 
document.querySelector('.weather__search').addEventListener('submit', e => {
    let search = document.querySelector('.weather__searchForm');

    // ~ by default when submit form the page will reload want to prevent that action 
    e.preventDefault();

    // ~ change the current city 
    currCity = search.value;

    // ~ get the weather forecast that city -> this will re-run the getWeather with the state value changed
    getWeather(); // display the data that was just changed

    // ~ clear form
    search.value = '';
})

// & Change the units -> Celsius or Fahrenheit
// ~ Celsius
document.querySelector('.weather_unit_celsius').addEventListener('click', () => {
    // ~ if units is not = to metric then change it to celsius(metric)
    if (units !== 'metric') {
        // ~ change to metric
        units= 'metric';

        // ~ get the weather forecast with the values changed
        getWeather();
    }
})

// ~ Fahrenheit
document.querySelector('.weather_unit_fahrenheit').addEventListener('click', () => {
        // ~ if units is not = to imperial then change it to fahrenheit(imperial)
        if (units !== 'imperial') {
            // ~ change to imperial
            units = 'imperial';

            // ~ get weather forecast with values changed
            getWeather();
        }
})

// & convert timestamp 
function convertTimeStamp(timestamp, timezone) {
    // ~ convert the seconds to hours
    const convertTimezone = timezone / 3600;

    const date = new Date(timestamp * 1000);

    // ~ create an object to display the weekday 
    // -> 'long' -> displayed in long format
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // ~ if this is the case want to return '-' else return '+'
        timezone: `Etc/GMT
            ${convertTimezone >= 0 ? '-' : '+'}
            ${Math.abs(convertTimezone)}`,
        hour12:true,
    }
    return date.toLocaleString('en-US', options);

}

// & convert country code to name
function convertCountryCode(country) {
                            // ~ will take in an array that has a string, an object  
                            // ~ 'em' -> english 
    let regionNames = new Intl.DisplayNames(['en'], {type:'region'});
    return regionNames.of(country);
}

function getWeather() {
    // & check in the console that this is running 
    // ~ it works 
    // console.log('testing');

    // & place copied API key here and create a var for it
    const API_KEY = 'fe7be2660e23f2087465bbd48208018c';
    
    /* 
    & use a fetch API so can make the request
    ~ use `` to add var to url
    ~ hard code London as city name
    */
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
        console.log(data); 
        city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
        /*
        ~ this currently does not have the full datetime only a date and time unix timestamp
        -> need to use those two values to return a datetime in this format -> i.e. Tuesday 15 May 2023 3:41 PM
        */

        datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);

        weather__forecast.innerHTML = `<p>${data.weather[0].main}`;

        // ~ need to round the number up to the nearest whole number as it currently gives the temp with 2 decimal places
        // -> use toFixed() to do this
        weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;

        // ~ instead of 10d will pass in data.weather[0].icon 
        weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Image Icon of the current weather forecast"/>`;

        weather__minMax.innerHTML = 
        `<p>Min: ${data.main.temp_min.toFixed()}&#176</p>
        <p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;

        weather__realFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;

        weather__humidity.innerHTML = `${data.main.humidity}%`;

        // ~ if units equals imperial than want mph else want m/s 
        weather__wind.innerHTML = `${data.wind.speed} ${units === 'imperial' ? 'mph' : 'm/s'}`;

        weather__pressure.innerHTML = `${data.main.pressure} hPa`;
    });
}

document.addEventListener('load', getWeather());
// * head over to open weather api to obtain the url and start making requests 