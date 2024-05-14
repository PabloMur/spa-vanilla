export function initCustomButton() {
  customElements.define(
    "custom-button",
    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
        this.render();
      }
      render() {
        const button = document.createElement("button");
        const style = document.createElement("style");

        button.className = "root";

        style.innerHTML = `
              .root{
                  font-size: 18px;
                  border-radius: 4px;
                  padding: 17px 13px;
                  background-color: orange;
                  color: black;
                  width: 90vw;
                  border: none;
                  animation: lower .4s ease ;
                  cursor: pointer;
              }
              @media screen and (min-width: 960px){
                .root{
                  max-width: 600px;
                  margin: 0 auto;
                }
              }
              @keyframes lower{
                0%{
                    transform: translateY(100%);
                }
                75%{
                    transform: translateY(-10%);
                }
                100%{
                    transform: translateY(0%);
                }
            }
            `;

        button.textContent = this.textContent || "ups!";

        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
      }
    }
  );
}
