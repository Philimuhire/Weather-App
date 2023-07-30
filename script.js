
const apiKey = '08b23855cea54f0c8d054458233007';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

async function fetchWeatherData(location) {
  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(location)}`);
    const data = await response.json();
    console.log(data);
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
  