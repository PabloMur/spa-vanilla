import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { initGameItem } from "./components/game-option";
import { initScoreComp } from "./components/score";
import { initStarComp } from "./components/star-comp";
import { customHeader } from "./components/header";
import { customLogo } from "./components/logo";
import { customMap } from "./components/map";

import { state } from "./state";

(function main() {
  initCustomButton();
  initCustomText();
  initGameItem();
  initScoreComp();
  initStarComp();
  customHeader();
  customLogo();
  customMap();

  if (localStorage.getItem("saved-games")) {
    state.init();
  } else {
    state.setState({
      currentGame: { miJugada: "", PCjugada: "" },
      history: [],
      score: {
        maquina: 0,
        tu: 0,
      },
    });
  }
  initRouter(document.querySelector("#root"));
})();
