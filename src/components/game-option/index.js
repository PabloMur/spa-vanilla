export function initGameItem() {
  customElements.define(
    "game-item",
    class extends HTMLElement {
      constructor() {
        super();
        this.syncWithState();
      }

      syncWithState = () => {
        this.render();
      };

      render = () => {
        const imageTijera = require("url:./img/tijera.svg");
        const imagePiedra = require("url:./img/piedra.svg");
        const imagePapel = require("url:./img/papel.svg");

        let imageURL;

        const variant = this.getAttribute("variant");
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        if (variant == "tijera") {
          imageURL = imageTijera;
        }

        if (variant == "piedra") {
          imageURL = imagePiedra;
        }

        if (variant == "papel") {
          imageURL = imagePapel;
        }

        div.className = "gameObject";
        div.innerHTML = `
        <img class="image" src="${imageURL}">
        `;

        style.innerHTML = `
        .gameObject {
          width: auto;
          min-height: 200px;
          margin: 0 10px;
          transition: all .2s ease-in;
        }
        .gameObject:hover{
          transform: scale(1.3);
        }
        .image{
          height: 30vh;
          width: auto;
        }        
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      };
    }
  );
}
