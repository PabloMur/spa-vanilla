export function customLogo() {
  customElements.define(
    "custom-logo",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
      }

      connectedCallback() {
        const logoButton = this.shadowRoot.querySelector(".logo");
        logoButton.addEventListener("click", this.handleLogoClick);
      }

      handleLogoClick = () => {
        if (this.params && this.params.goTo) {
          this.params.goTo("/welcome"); // Navegar a la ruta de bienvenida
        }
      };

      render() {
        const logoButton = document.createElement("button");
        logoButton.className = "logo";
        logoButton.textContent = "Logo"; // Texto del logo

        const style = document.createElement("style");
        style.innerHTML = `
            .logo {
              font-size: 20px;
              font-weight: bold;
              cursor: pointer;
              color: white;
              background-color: transparent;
              border: none;
            }
            .logo:hover {
              text-decoration: underline;
            }
          `;

        this.shadowRoot.innerHTML = ""; // Limpiar el contenido anterior
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(logoButton);
      }
    }
  );
}
