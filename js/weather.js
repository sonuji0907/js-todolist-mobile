const API_KEY = "1a800cd7e8cc72ee874bdfad1cda0cbb"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const name = document.querySelector(".weather span:first-child");
        const weather = document.querySelector(".weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} c`;
    });
}
function onGeoEroor(){

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEroor);



