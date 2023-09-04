const apiKey = "99eb7c3d96218bf77eb13ad9c9f77728";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weatherBox = document.querySelector(".weather");
const cityName = document.querySelector(".weather-city");
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".weather-temp");
const humidity = document.querySelector(".details-humidity-value");
const wind = document.querySelector(".details-wind-value")
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const error = document.querySelector(".error")

const checkWeather = async function (city) {

    try {
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await res.json();

        cityName.innerHTML = data.name;
        temp.innerHTML = `${data.main.temp.toFixed()}°C`;
        humidity.innerHTML = `${data.main.humidity} %`;
        wind.innerHTML = `${data.wind.speed.toFixed()} km/h`;

        error.style.display = "none"

        if (data.weather[0].main === "Clear") {
            weatherIcon.src = "img/clear.png"
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "img/clouds.png"
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "img/rain.png"
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "img/drizzle.png"
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "img/mist.png"
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "img/snow.png"
        }

        weatherBox.style.display = "block";
    } catch (err) {
        error.style.display = "block";
        weatherBox.style.display = "none"
    }
}

searchBtn.addEventListener("click", function () {
    checkWeather(searchInput.value)
})
