import { customLogo } from "../logo";
export function customHeader() {
  customElements.define(
    "custom-header",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.params = {}; // Inicializar un objeto vacío para los parámetros
        this.render();
      }

      connectedCallback() {
        // Limpiar eventos anteriores antes de asignar nuevos eventos
        this.clearEventListeners();

        // Ejemplo de uso: agregar eventos de clic a los botones de navegación
        const navigationButtons =
          this.shadowRoot.querySelectorAll(".navigation-button");
        navigationButtons.forEach((button) => {
          button.addEventListener("click", this.handleNavigationClick);
        });
      }

      clearEventListeners() {
        const navigationButtons =
          this.shadowRoot.querySelectorAll(".navigation-button");
        navigationButtons.forEach((button) => {
          button.removeEventListener("click", this.handleNavigationClick);
        });
      }

      handleNavigationClick = (event) => {
        const button = event.target;
        const destination = button.getAttribute("data-destination");
        if (this.params.goTo && destination) {
          this.params.goTo(destination); // Navegar a la ruta especificada
        }
      };

      render() {
        const header = document.createElement("header");
        const style = document.createElement("style");

        header.className = "root";
        header.innerHTML = `
          <div>
            <button class="navigation-button" data-destination="/welcome">Vanilla SPA</button>
          </div>
          <div>
            <button class="navigation-button" data-destination="/maps">Ir a Mapas</button>
            <button class="navigation-button" data-destination="/agents">Ir a Agentes</button>
            <button class="navigation-button" data-destination="/weapons">Ir a Armas</button>
          </div>
        `;

        style.innerHTML = `
          .root {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: #333;
            color: white;
          }
          .logo {
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
          }
          .navigation-button {
            color: white;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
          .navigation-button:hover {
            text-decoration: underline;
          }
        `;

        this.shadowRoot.innerHTML = ""; // Limpiar el contenido anterior
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(header);
      }
    }
  );
}
