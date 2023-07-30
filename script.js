
const apiKey = '08b23855cea54f0c8d054458233007';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

async function fetchWeatherData(location) {
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(location)}`);
      const data = await response.json();
      const processedData = processWeatherData(data);
      displayWeatherInfo(processedData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  

function processWeatherData(data) {
    return {
      location: data.location.name,
      temperature: data.current.temp_c // Change to temp_f if you want Fahrenheit
    };
  }
  
  const searchForm = document.getElementById('searchForm');
  const locationInput = document.getElementById('locationInput');
  const weatherInfo = document.getElementById('weatherInfo');
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    fetchWeatherData(location);
  });
  
  function displayWeatherInfo(weatherData) {
    const html = `
      <h2>${weatherData.location}</h2>
      <p>Temperature: ${weatherData.temperature} °C</p>
    `;
    weatherInfo.innerHTML = html;
  }
  