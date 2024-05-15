export function initTestPage(params) {
  const div = document.createElement("div");

  const header = document.createElement("custom-header");
  header.params = params;
  div.appendChild(header);

  const style = document.createElement("style");
  style.innerHTML = `
      .weather-container {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
      }
      .weather-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .weather-icon {
        width: 64px;
        height: 64px;
        margin-right: 20px;
      }
      .weather-description {
        flex-grow: 1;
        font-size: 18px;
      }
      .weather-temperature {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
    `;
  div.appendChild(style);

  const content = document.createElement("div");
  content.className = "weather-container";

  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Cargando...";
  content.appendChild(loadingMessage);

  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=-38%2C-57.56";
  const apiKey = "604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Error en la solicitud de datos del clima: ${response.statusText}`
        );
      }
    })
    .then((weatherData) => {
      console.log("Datos del clima:", weatherData);

      content.innerHTML = ""; // Limpiar el contenido anterior

      const weatherIcon = document.createElement("img");
      weatherIcon.src = `https:${weatherData.current.condition.icon}`;
      weatherIcon.alt = weatherData.current.condition.text;
      weatherIcon.className = "weather-icon";
      content.appendChild(weatherIcon);

      const weatherDescription = document.createElement("div");
      weatherDescription.className = "weather-description";
      weatherDescription.innerHTML = `
          <p>${weatherData.location.name}, ${weatherData.location.region}</p>
          <p>${weatherData.current.condition.text}</p>
        `;
      content.appendChild(weatherDescription);

      const weatherTemperature = document.createElement("div");
      weatherTemperature.className = "weather-temperature";
      weatherTemperature.textContent = `${weatherData.current.temp_c}°C`;
      content.appendChild(weatherTemperature);
    })
    .catch((error) => {
      console.error("Error al obtener datos del clima:", error);
      content.innerHTML = `<p>Error: No se pudieron obtener los datos del clima.</p>`;
    });

  div.appendChild(content);

  return div;
}
