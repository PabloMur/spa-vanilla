type play = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: { miJugada: "", PCjugada: "" },
    history: [],
    score: {
      maquina: 0,
      tu: 0,
    },
  },
  listeners: [],

  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-games", JSON.stringify(newState));
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  whoWins(miJugada: play, PCjuagada: any) {
    const ganeConTijeras = miJugada == "tijera" && PCjuagada == "papel";
    const ganeConPiedra = miJugada == "piedra" && PCjuagada == "tijera";
    const ganeConPapel = miJugada == "papel" && PCjuagada == "piedra";

    const perdiConTijeras = miJugada == "tijera" && PCjuagada == "piedra";
    const perdiConPapel = miJugada == "papel" && PCjuagada == "tijera";
    const perdiConPiedra = miJugada == "piedra" && PCjuagada == "papel";

    const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);
    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijeras].includes(
      true
    );
    const empate = gane == perdi;

    if (gane) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        score: { tu: lastState.score.tu + 1, maquina: lastState.score.maquina },
        result: "gane",
      });
      return "gane";
    }
    if (perdi) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        score: { tu: lastState.score.tu, maquina: lastState.score.maquina + 1 },
        result: "perdi",
      });
      return "perdi";
    }
    if (empate) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        result: "empate",
      });
      return "empate";
    }
  },
  pushToHistory(a) {
    return this.data.history.push(a);
  },
  init() {
    let localData = localStorage.getItem("saved-games");
    this.setState(JSON.parse(localData));
  },
};

export { state };
