import { state } from "../../state";
export function initPageComparition(params) {
  const result = state.getState();

  const div = document.createElement("div");
  div.innerHTML = `
                <game-item class="pcMove" variant="${result.currentGame.PCjugada}"></game-item>
                <game-item class="playerMove" variant="${result.currentGame.miJugada}"></game-item>
                
            `;
  const style = document.createElement("style");
  div.className = "contenedor";
  style.innerHTML = `
    .contenedor{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
    }
    
    .playerMove{
        margin: 0 auto;
        animation: fade .5s linear;
        transform: scale(1.3);
        
    }
    .pcMove{
        margin: 0 auto;
        transform: rotate(180deg)
                   scale(1.3);        
        animation: fadeInverted .5s linear;
    }

    @keyframes fade{
      0%{
        transform: translateY(100%)
                   scale(1.3);
      }
      100%{
        transform: translateY(0%)
                   scale(1.3);
      }
    }
    @keyframes fadeInverted{
        0%{
            transform: translateY(-500%)
                       rotate(180deg)
                       scale(1.3);
        }
        100%{
            transform: translateY(0%)
                       rotate(180deg)
                       scale(1.3);
        }
      }
  `;
  div.appendChild(style);
  const countDown = () => {
    let reg = 1;
    const timmer = setInterval(() => {
      if (reg == 0) {
        clearInterval(timmer);
        params.goTo("/result");
      } else {
        reg--;
      }
    }, 1000);
  };
  countDown();

  return div;
}
