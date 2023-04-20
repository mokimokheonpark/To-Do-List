const API_KEY = "2c29d4e4fe987329fd8c9a9c2a330ae9";

function handleSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C,`;
        city.innerText = data.name;
    });
}

function handleError() {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);