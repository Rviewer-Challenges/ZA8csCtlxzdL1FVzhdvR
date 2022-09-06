import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tablero from "./components/Tablero";
import Baraja from "./components/Baraja";

const getEstadoInicial = () => {
  const baraja = Baraja();
  return {
    baraja,
    parejaSeleccionada: [],
    comparacion: false,
    numeroIntentos: 0,
    parejasRestantes: 0
  };
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div className="App">
        <Header
          numeroIntentos={this.state.numeroIntentos}
          reiniciarPartida={() => this.reiniciarPartida()}
        />
        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }
  seleccionarCarta(carta) {
    if (
      this.state.comparacion ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.emparejada
    ) {
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada,
    });
    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }
  compararPareja(parejaSeleccionada) {
    this.setState({ comparacion: true });
    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }
          return { ...carta, emparejada: true };
        });
      }
      this.tableroSolucionado(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        comparacion: false,
        numeroIntentos: this.state.numeroIntentos + 1,
      });
    }, 1000);
  }

  tableroSolucionado(baraja) {
    if (baraja.filter((carta) => !carta.emparejada).length === 0) {
      alert(`Ganaste en ${this.state.numeroIntentos} intentos!`);
    }
  }
  reiniciarPartida() {
    this.setState(getEstadoInicial());
  }
}

export default App;
