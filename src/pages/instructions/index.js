export function initPageInstructions(params) {
  const div = document.createElement("div");
  div.innerHTML = `
              <p class="instructions">
              Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
              </p>
              <custom-button class="play-button">¡Jugar!</custom-button>
          `;
  const style = document.createElement("style");
  div.className = "contenedor";
  style.innerHTML = `
  .contenedor{
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
  .instructions{
    font-size: 45px;
    display: block;
    height: auto;
    max-width: 600px;
    text-align: center;
    animation: fade .7s ease;
  }
  @keyframes fade{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;
  div.appendChild(style);
  const playButton = div.querySelector(".play-button");
  playButton.addEventListener("click", () => {
    params.goTo("/choose");
  });
  return div;
}
