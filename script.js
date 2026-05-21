const apiKey = "40651793573cb0feb2241c6cfb7586e9";

const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        alert("City not found");
        return;

    }

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";

    document.querySelector(".wind").innerHTML =
    data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
}

}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);

});
searchBox.addEventListener("keypress", (event)=>{

    if(event.key === "Enter"){

        checkWeather(searchBox.value);

    }

});
checkWeather("Delhi");