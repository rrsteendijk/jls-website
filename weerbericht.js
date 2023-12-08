document.addEventListener('DOMContentLoaded', function() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=52.370216&longitude=4.895168&current_weather=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            const currentWeather = data.current_weather;
            weatherElement.innerHTML = `Temperatuur: ${currentWeather.temperature} &deg;C<br>Wind: ${currentWeather.windspeed} km/h`;
        })
        .catch(error => {
            console.error('Fout bij het ophalen van het weer:', error);
            const weatherElement = document.getElementById('weather');
            weatherElement.innerHTML = 'Kan het weer niet laden.';
        });
});
