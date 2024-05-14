import { state } from "../../state";

export function initPageChoose(params) {
  const lastState = state.getState();
  const div = document.createElement("div");
  let cuentaReg = 3;
  let jugada = false;

  div.innerHTML = `
              <h1 class="contador"></h1>
              <div class="containerManos">
                <game-item variant="tijera" id="tijera"></game-item>
                <game-item variant="piedra" id="piedra"></game-item>
                <game-item variant="papel" id="papel"></game-item>
              </div>         
            `;

  div.className = "container";

  const style = document.createElement("style");
  style.innerHTML = `
    .container{
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  `;

  div.appendChild(style);

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let rand = getRandomArbitrary(1, 4);

  const pcOptions = [
    { k: 1, op: "piedra" },
    { k: 2, op: "papel" },
    { k: 3, op: "tijera" },
  ];

  const retornaOpcionPC = (r) => {
    for (const key of pcOptions) {
      if (r == key.k) {
        return key.op;
      }
    }
  };

  const tijera = div.querySelector("#tijera");
  tijera.addEventListener("click", () => {
    jugada = true;
    state.setState({
      ...lastState,
      currentGame: { miJugada: "tijera", PCjugada: retornaOpcionPC(rand) },
    });
    let resultadoDeLaPartida = state.whoWins("tijera", retornaOpcionPC(rand));
  });

  const piedra = div.querySelector("#piedra");
  piedra.addEventListener("click", () => {
    jugada = true;
    state.setState({
      ...lastState,
      currentGame: { miJugada: "piedra", PCjugada: retornaOpcionPC(rand) },
    });
    let resultadoDeLaPartida = state.whoWins("piedra", retornaOpcionPC(rand));
  });

  const papel = div.querySelector("#papel");
  papel.addEventListener("click", () => {
    jugada = true;
    state.setState({
      ...lastState,
      currentGame: { miJugada: "papel", PCjugada: retornaOpcionPC(rand) },
    });
    let resultadoDeLaPartida = state.whoWins("papel", retornaOpcionPC(rand));
  });

  const contador = div.querySelector(".contador");
  const miniStyle = document.createElement("style");
  miniStyle.innerHTML = `
    .contador{
      height: 300px;
      width: 300px;
    }
  `;
  contador.appendChild(miniStyle);
  const styleContador = document.createElement("style");
  (() => {
    let setIN = setInterval(() => {
      if (cuentaReg == 0 && jugada == false) {
        clearInterval(setIN);
        params.goTo("/instructions");
      } else if (jugada == true) {
        clearInterval(setIN);
        params.goTo("/comparition");
      }
      contador.innerHTML = cuentaReg.toString();
      styleContador.innerHTML = `
        .contador{
          height: 300px;
          width: 300px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-size: 100px;
          animation: fade .5s linear;
        }
        @keyframes fade{
          0%{
            transform: translateY(-100%)
          }
          100%{
            transform: translateY(0%)
          }
        }
        `;
      contador.appendChild(styleContador);
      cuentaReg--;
    }, 1000);
  })();

  return div;
}
