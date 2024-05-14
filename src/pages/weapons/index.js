import { customHeader } from "../../components/header/index";

export function initWeaponsPage(params) {
  const div = document.createElement("div");

  // Crear una instancia del custom-header y pasar los parámetros necesarios
  const header = document.createElement("custom-header");
  header.params = params; // Asignar los parámetros a una propiedad del elemento
  div.appendChild(header);

  // Agregar contenido específico de la página
  const content = document.createElement("p");
  content.textContent = "Esta es la pagina de las armas";
  div.appendChild(content);

  return div;
}
