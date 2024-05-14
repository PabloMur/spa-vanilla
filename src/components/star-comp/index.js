import { state } from "../../state";

export function initStarComp() {
  customElements.define(
    "star-comp",

    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      img;
      color;

      constructor() {
        super();
        state.subscribe(() => {
          this.syncWithState();
        });
        this.syncWithState();
      }

      syncWithState = () => {
        const lastState = state.getState();
        if (lastState.result == "perdi") {
          this.img = require("url:../../img/perdiste.svg");
        }
        if (lastState.result == "gane") {
          this.img = require("url:../../img/ganaste.svg");
        }
        if (lastState.result == "empate") {
          this.img = require("url:../../img/empataste.svg");
        }
        this.render();
      };
      render = () => {
        this.shadow.innerHTML = `
          <div class="scoreCont">
            <img class="starEl" src="${this.img}"/>
          </div>
        `;

        const style = document.createElement("style");
        style.innerHTML = `
            .starEl{
                height: 200px;
                width: auto;
                animation:lower 3s linear infinite;
                z-index: 2;
            }
            .scoreCont{
                height: 245px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            @keyframes lower{
                0%{
                    transform: translateY(0%);
                }
                50%{
                  transform: translateY(5%);
                }
                100%{
                  transform: translateY(0%);
                }
            }
        `;

        this.shadow.appendChild(style);
      };
    }
  );
}
