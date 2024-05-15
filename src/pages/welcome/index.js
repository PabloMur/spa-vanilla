export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.className = "welcome";
  div.innerHTML = `
    <custom-text variant="title" class="title">
      SPA Vanilla JS
    </custom-text>
    <div>
      <custom-text variant="body" class="body">
        ¡Hola, soy Pablo, desarrollador web full-stack!
      </custom-text>
      <custom-text class="body">
        He optado por hacer una pequeña app de clima, para saber el tiempo de mis tres ciudades favoritas!
      </custom-text>
    </div>
    <custom-button class="start-button">¡Empezar!</custom-button>
  `;

  style.innerHTML = `
    .welcome {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
    }

    .title {
      font-size: 40px;
      animation: fade .6s ease;
    }

    .body {
      font-size: 20px;
      max-width: 80%;
      text-align: center;
      margin-bottom: 20px;
    }

    .start-button {
      font-size: 24px;
    }

    @keyframes fade {
      0% {
        transform: translateY(-100%);
      }
      75% {
        transform: translateY(10%);
      }
      100% {
        transform: translateY(0%);
      }
    }

    @media (max-width: 768px) {
      .title {
        font-size: 30px;
      }

      .body {
        font-size: 18px;
      }

      .start-button {
        font-size: 20px;
      }
    }
  `;

  div.appendChild(style);

  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/marpla");
  });

  return div;
}
