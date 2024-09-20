let inputData = document.getElementById('input1');
let searchBtn = document.getElementById('btn');
let placeName = document.getElementById('placeName2');
let deg = document.getElementById('deg');
let humi = document.getElementById('humi');
let windsp = document.getElementById('windsp');
let imageWeather = document.getElementById('imageweather');


searchBtn.addEventListener('click', function () {
    let inputValue = inputData.value;

    let URL = `https://api.openweathermap.org/data/2.5/weather?appid=aba6ff9d6de967d5eac6fd79114693cc&q=${inputValue}&units=metric`;


    async function getWeather() {
        let response = await fetch(URL);
        let data = await response.json();
        placeName.innerHTML = data.name;
        deg.innerHTML = data.main.temp + '&deg;C';
        humi.innerHTML = data.main.humidity + '%';
        windsp.innerHTML = data.wind.speed + 'km/h'
        

        if (data.weather[0].main == 'Clouds') {
            imageWeather.src = '/image/clouds.jpg';
        } else if (data.weather[0].main == "Clear") {
            imageWeather.src = 'image/clear.webp';
        } else if (data.weather[0].main == "Rain") {
            imageWeather.src = 'image/rain.png';
        } else if (data.weather[0].main == "Drizzle") {
            imageWeather.src = 'image/drizzle.png';
        } else if (data.weather[0].main == "Mist") {
            imageWeather.src = 'image/mist.png';
        } else if (data.weather[0].main == "Snow") {
            imageWeather.src = 'image/snow.png';
        }else if (data.weather[0].main == "Haze") {
            imageWeather.src = 'image/haze.png';
        }

        
    }
        inputData.value = '';

        document.querySelector('.weatherdetail').style.display = 'block';
        getWeather();

   

});

