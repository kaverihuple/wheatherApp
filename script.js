const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


   async function checkWeather(city){
    const api_key = "f9785a90cd3763c67dd9ee13980e33ee";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';

     const weather_date = await fetch('${url}').then(response => response.json());

     if(weather_date.cod === '404'){
         console.log("error");
         return;    
     }

     

     temperature.innerHTML = '${Math.round(weather_date.main.temp - 273.15)}°C';
     description.innerHTML = '${wearhet_date.weather[0].description}';
     humidity.innerHTML = '${weather_data.main.humidity}%';
     wind_speed.innerHTML = '${weather_date.wind_speed} Km/H';

switch(weather_date.weather[0].main){
    case 'M1':
        weather_img.src = "img/m1.jpg";
        break;
        case 'M2':
        weather_img.src = "img/m2.jpg";
        break;
        case 'M3':
        weather_img.src = "img/m3.jpg";
        break;
        case 'M4':
        weather_img.src = "img/m4.jpg";
        break;
        case 'M5':
        weather_img.src = "img/m5.jpg";
        break;
}



     console.log(weather_date);
}    


searchBtn.addEventListener('click',  ()=> {
        checkWeather(inputBox.value);
    });

    