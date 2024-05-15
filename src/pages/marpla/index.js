export function initMarplaPage(params) {
  const div = document.createElement("div");

  // Crear custom-header y agregarlo al div principal
  const header = document.createElement("custom-header");
  header.params = params;
  div.appendChild(header);

  // Crear y agregar estilos CSS
  const style = document.createElement("style");
  style.innerHTML = `
          .weather-container {
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .weather-icon {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
            animation: fadeIn 1s ease;
          }
          .weather-description {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-temperature {
            font-size: 48px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-details {
            font-size: 24px;
            color: #666;
            text-align: center;
            margin-bottom: 10px;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `;
  div.appendChild(style);

  // Crear contenedor para mostrar el clima
  const content = document.createElement("div");
  content.className = "weather-container";

  // Mostrar mensaje de carga inicial
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Cargando...";
  content.appendChild(loadingMessage);

  // URL y configuración para obtener datos del clima
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=-38.0263011%2C-57.5424541";
  const apiKey = "604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  // Realizar la solicitud para obtener datos del clima
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

      // Limpiar el contenido anterior (mensaje de carga)
      content.innerHTML = "";

      // Mostrar icono del clima
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `https:${weatherData.current.condition.icon}`;
      weatherIcon.alt = weatherData.current.condition.text;
      weatherIcon.className = "weather-icon";
      content.appendChild(weatherIcon);

      // Mostrar descripción del clima (nombre y texto de condición)
      const weatherDescription = document.createElement("div");
      weatherDescription.className = "weather-description";
      weatherDescription.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;
      content.appendChild(weatherDescription);

      // Mostrar temperatura con estilos destacados
      const weatherTemperature = document.createElement("div");
      weatherTemperature.className = "weather-temperature";
      weatherTemperature.textContent = `${weatherData.current.temp_c}°C`;
      content.appendChild(weatherTemperature);

      // Mostrar detalles adicionales del clima en forma de columna
      const weatherDetailsContainer = document.createElement("div");
      weatherDetailsContainer.className = "weather-details";

      const humidity = document.createElement("p");
      humidity.textContent = `Humedad: ${weatherData.current.humidity}%`;
      weatherDetailsContainer.appendChild(humidity);

      const wind = document.createElement("p");
      wind.textContent = `Viento: ${weatherData.current.wind_kph} km/h ${weatherData.current.wind_dir}`;
      weatherDetailsContainer.appendChild(wind);

      const pressure = document.createElement("p");
      pressure.textContent = `Presión: ${weatherData.current.pressure_mb} mb`;
      weatherDetailsContainer.appendChild(pressure);

      content.appendChild(weatherDetailsContainer);
    })
    .catch((error) => {
      console.error("Error al obtener datos del clima:", error);
      content.innerHTML = `<p>Error: No se pudieron obtener los datos del clima.</p>`;
    });

  // Agregar el contenido al div principal
  div.appendChild(content);

  // Devolver el div principal
  return div;
}
