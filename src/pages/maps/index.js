export function initMapsPage(params) {
  const div = document.createElement("div");

  // Crear una instancia del custom-header y pasar los parámetros necesarios
  const header = document.createElement("custom-header");
  header.params = params; // Asignar los parámetros a una propiedad del elemento
  div.appendChild(header);

  // Agregar contenido específico de la página
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Cargando..."; // Mostrar un mensaje de carga mientras se espera la respuesta
  div.appendChild(loadingMessage);

  // Realizar la llamada a la API usando fetch
  const apiURL =
    "https://valorant-agents-maps-arsenal.p.rapidapi.com/maps/es-es";
  const apiKey = "604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705";

  fetch(apiURL, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "valorant-agents-maps-arsenal.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Imprimir los datos en la consola cuando la llamada sea exitosa

      // Eliminar el mensaje de carga
      if (div.contains(loadingMessage)) {
        div.removeChild(loadingMessage);
      }

      // Verificar si hay datos y si hay un array de maps
      if (data && Array.isArray(data.maps)) {
        // Iterar sobre cada mapa y mostrar solo el nombre
        data.maps.forEach((map) => {
          const customMapElement = document.createElement("custom-map");
          customMapElement.setAttribute("map-name", map.map_name);
          div.appendChild(customMapElement);
        });
      } else {
        // Mostrar mensaje de error si los datos no son válidos
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Error: Datos de respuesta inválidos";
        div.appendChild(errorMessage);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // Manejar errores de la llamada

      // Mostrar un mensaje de error en caso de fallo
      if (div.contains(loadingMessage)) {
        div.removeChild(loadingMessage);
      }
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error: " + error.message;
      div.appendChild(errorMessage);
    });

  return div;
}
