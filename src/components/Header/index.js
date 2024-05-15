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
            <button class="navigation-button" data-destination="/marpla">Mar Del Plata</button>
            <button class="navigation-button" data-destination="/trenque">T. Lauquen</button>
            <button class="navigation-button" data-destination="/monte">Montevideo</button>
          </div>
        `;

        style.innerHTML = `
          .root {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 50px;
            background-color: orange;
            color: white;
            max-width: 100vw;
          }
          .logo {
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            padding: 10px;
            border-radius: 4px;
          }
          .navigation-button {
            color: white;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 10px;
            font-size: 18px;
          }
          .navigation-button:hover {
            background-color: black;
            color: white;
            border-radius: 4px;
          }

          @media (max-width: 768px) {
            .root {
              flex-direction: column;
              align-items: center;
              padding: 10px;
            }

            .navigation-button {
              font-size: 16px;
            }

            .navigation-buttons-container {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 100%;
              margin-top: 20px;
            }
          }
        `;

        this.shadowRoot.innerHTML = ""; // Limpiar el contenido anterior
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(header);
      }
    }
  );
}
