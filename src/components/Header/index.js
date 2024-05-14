export function customHeader() {
  customElements.define(
    "custom-header",
    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
        this.render();
      }
      render() {
        const header = document.createElement("header");
        const style = document.createElement("style");

        header.className = "root";

        style.innerHTML = `
                .root{
                    font-size: 18px;
                    border-radius: 4px;
                    padding: 17px 13px;
                    background-color:#006CFC;
                    color:#D8FCFC;
                    width: 90vw;
                    border: 10px solid #001997;
                    animation: lower .4s ease ;
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
