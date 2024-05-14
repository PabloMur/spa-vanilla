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
        .title{
            font-size:80px;
            font-weight: bold;
            color: orange;
            transition: all 3s ease;
        }
        .body{
            font-size: 30px;
            max-width: 600px;
            margin-bottom: 20px;
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
