const searchInput = document.querySelector('.searchInput')
const searchIcon = document.querySelector('.search-icon')
const fullDate = document.querySelector('.date')
const place = document.querySelector('.place')
const weatherImg = document.getElementById('weatherImg')
const weather = document.querySelector('.weather')
const temp = document.querySelector('.temp')
const highTemp = document.querySelector('.high-temp')
const lowTemp = document.querySelector('.low-temp')
const container = document.querySelector('.container')

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]

let dateObj = new Date()
let month = months[dateObj.getUTCMonth()]
let day = dateObj.getUTCDate()
let year = dateObj.getUTCFullYear()

fullDate.innerHTML = `${month} ${day}, ${year}`

// API KEY
const API_KEY = "2f03400bd25211b9b8337961c25c8d08";

// Fetch weather by city
const getWeatherData = async (city='London') => {
    try {
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        {
            headers: {
                Accept: "application/json"                
            }   
        })

        const weatherData = await weatherDataFetch.json()
        console.log(weatherData)

        //update UI
        place.innerHTML =  `${weatherData.name},${weatherData.sys.country}`
        weather.innerHTML = `${weatherData.weather[0].main}`
        weatherImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png/>`
        temp.innerHTML = `${Math.round(weatherData.main.temp)}°C`
        highTemp.innerHTML = `High: ${Math.round(weatherData.main.temp_max)}°C`
        lowTemp.innerHTML = `Low: ${Math.round(weatherData.main.temp_min)}°C`

    } catch (error) {
        console.log(error)
    }
}

getWeatherData() // This will display weather data on console which will help to get place, temp, waether etc)

searchIcon.addEventListener('click', () => {
    const city = searchInput.value.trim()
    if(city){
        getWeatherData(city)
    }
})
