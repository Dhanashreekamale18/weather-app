const apiKey = "03d04b52837fd6ebd1797fa222651368";

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weatherResult").innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML =
        "<p>City not found!</p>";
    });
}