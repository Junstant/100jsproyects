// call elements from dom
const dayName = document.querySelector('.dayName');
const imgWeather = document.querySelector('.imgWeather');
const weatherDate = document.querySelector('.weatherDate');
const dateVal = document.querySelector('.dateVal');
const tempVal = document.querySelector('.tempVal');
const sensVal = document.querySelector('.sensVal');
const humidityVal = document.querySelector('.humidityVal');
const visibilityVal = document.querySelector('.visibilityVal');
const cloudVal = document.querySelector('.cloudVal');
const windSpeedVal = document.querySelector('.windSpeedVal');
const angleVal = document.querySelector('.angleVal');
const sunday = document.querySelector('.sunday');
const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');
const saturday = document.querySelector('.saturday');
const ubicationVal = document.querySelector('.ubicationVal');

let latitude = 0;
let longitude = 0;
// make the request to the api
const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const response = JSON.parse(this.response);
        const temp = response.main.temp;
        const sens = response.main.feels_like;
        const humidity = response.main.humidity;
        const visibility = response.visibility;
        const cloud = response.clouds.all;
        const windSpeed = response.wind.speed;
        const angle = response.wind.deg;
        const img = response.weather[0].icon;
        imagen = img;
        const date = response.weather[0].description;
        // set the values to the dom
        weatherDate.innerHTML = `${date}`;
        tempVal.innerHTML = `${temp}°K`;
        sensVal.innerHTML = `${sens}°K`;
        humidityVal.innerHTML = `${humidity}%`;
        visibilityVal.innerHTML = `${visibility}m`;
        cloudVal.innerHTML = `${cloud}%`;
        windSpeedVal.innerHTML = `${windSpeed}m/s`;
        angleVal.innerHTML = `${angle}°`;
        // set the image of the weather
        imgWeather.style.backgroundImage = `url(https://openweather.site/img/wn/${img}.png)`;
        latitude = response.coord.lat;
        longitude = response.coord.lon;
        
    }
});
// get the url to call the api
xhr.open('GET', 'https://open-weather13.p.rapidapi.com/city/landon/EN');
// set the api key
xhr.setRequestHeader('X-RapidAPI-Key', '685e831e0amsh9ce0a6e1d756b63p172a01jsn36294e64c809');
xhr.setRequestHeader('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com');
// send the request
xhr.send(data);

// set the day of the week
const date = new Date();
const day = date.getDay();
switch (day) {
    case 0:
        dayName.innerHTML = 'Sunday';
        sunday.classList.add('active');
        break;
    case 1:
        dayName.innerHTML = 'Monday';
        monday.classList.add('active');
        break;
    case 2:
        dayName.innerHTML = 'Tuesday';
        tuesday.classList.add('active');
        break;
    case 3:
        dayName.innerHTML = 'Wednesday';
        wednesday.classList.add('active');
        break;
    case 4:
        dayName.innerHTML = 'Thursday';
        thursday.classList.add('active');
        break;
    case 5:
        dayName.innerHTML = 'Friday';
        friday.classList.add('active');
        break;
    case 6:
        dayName.innerHTML = 'Saturday';
        saturday.classList.add('active');
        break;
}

//get the date in the format dd/mm/yyyy
const dayVal = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
dateVal.innerHTML = `${dayVal}/${month}/${year}`;
