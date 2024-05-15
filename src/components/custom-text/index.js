export function initCustomText() {
  class CustomText extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }

    render() {
      const variant = this.getAttribute("variant") || "body";
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
        .title {
          font-size: 80px;
          font-weight: bold;
          color: orange;
          transition: all 3s ease;
          margin-bottom: 20px; /* Añadir un espacio inferior */
        }
        .body {
          font-size: 30px;
          max-width: 600px;
          margin-bottom: 20px;
        }

        /* Media query para ajustar estilos en dispositivos móviles */
        @media (max-width: 768px) {
          .title {
            font-size: 40px; /* Reducir tamaño de fuente en móvil */
          }
          .body {
            font-size: 20px; /* Reducir tamaño de fuente en móvil */
            max-width: 100%; /* Ocupar todo el ancho disponible en móvil */
          }
        }
      `;

      div.className = variant;
      div.textContent = this.textContent;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }

  customElements.define("custom-text", CustomText);
}
