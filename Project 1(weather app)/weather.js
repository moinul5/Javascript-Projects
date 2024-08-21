const apiKey = 'e76c6bb44f91ee684d3377617f4f6b29'
let ctiyName=document.getElementsByClassName('city')
let tempeture = document.getElementsByClassName('temp')
let inputCityName = document.querySelector('input')
let searchButton = document.querySelector('button')
let weatherIcon = document.querySelector('.weatherIcon')

searchButton.addEventListener('click',(e)=>{
    ctiyName = inputCityName.value
    getWeather(ctiyName)
})

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = await response.json();

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed+ " km";

        if(data.weather[0].main == 'Clouds')
        {
            weatherIcon.src= 'icons/clouds.png'
        }
        else if(data.weather[0].main == 'Rain')
        {
            weatherIcon.src  = 'icons/weather.png'
        }
        else if(data.weather[0].main == 'Drizzle')
        {
            weatherIcon.src  = 'icons/fog.png'
        }
        else if(data.weather[0].main == 'Clear')
        {
            weatherIcon.src  = 'icons/sun.png'
        }
        else if(data.weather[0].main == 'Mist')
        {
            weatherIcon.src  = 'icons/mist.png'
        }
        

        
    } catch (error) {
        console.log('Enter correct city');
    }
}

