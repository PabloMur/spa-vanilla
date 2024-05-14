export function customMap() {
  customElements.define(
    "custom-map",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
      }

      static get observedAttributes() {
        return ["map-name"];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "map-name") {
          this.render();
        }
      }

      render() {
        const mapName = this.getAttribute("map-name") || "";

        this.shadowRoot.innerHTML = `
            <style>
              /* Estilos CSS para personalizar la apariencia del componente */
              /* Puedes agregar estilos aquí */
              :host {
                display: block;
                padding: 10px;
                font-size: 18px;
                font-weight: bold;
                color: #333;
              }
            </style>
            <div>${mapName}</div>
          `;
      }
    }
  );
}
