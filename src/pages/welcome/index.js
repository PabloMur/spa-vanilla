export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.className = "welcome";
  div.innerHTML = `
            <custom-text variant="title" class="title">
                Pruba Técnica - SPA Vanilla JS
            </custom-text>
            <custom-text variant="body" class="title">
                ¡Hola, soy Pablo, desarrollador web full-stack!
                Les dejo una pequeña Single Page Application, que tiene como temática el juego de Valorant!
            </custom-text>
            <custom-button class="start-button">¡Empezar!</custom-button>
          `;

  style.innerHTML = `
    .welcome{
      height: 100vh;
      width: 100%;
      display: flex; 
      flex-direction:column;
      align-items: center;
      justify-content: space-around;
    }
    
    .title{
      animation: fade .6s ease;
    }

    @keyframes fade{
      0%{
        transform: translateY(-100%);
      }
      75%{
        transform: translateY(10%);
      }
      100%{
        transform: translateY(0%);
      }
    }
  `;

  div.appendChild(style);

  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/panel");
  });

  return div;
}
