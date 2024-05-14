export function initPanelPage(params) {
  const div = document.createElement("div");

  // Crear una instancia del custom-header y pasar los parámetros necesarios
  const header = document.createElement("custom-header");
  header.params = params; // Asignar los parámetros a una propiedad del elemento
  div.appendChild(header);

  // Agregar contenido específico de la página
  const content = document.createElement("p");
  content.textContent =
    "Este es el panel, deberia explicar de que va la app o indicar que es lo que van a encontrar en las distintas opciones del menu";
  div.appendChild(content);

  return div;
}
