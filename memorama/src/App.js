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
        <Header />
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
      this.state.parejaSeleccionada.indexO(carta) > -1 ||
      carta.emparejada
    ) {
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada,
    });
    if (parejaSeleccionada.leght === 2) {
      this.compararpareja(parejaSeleccionada);
    }
  }
  compararPareja(parejaSeleccionada) {
    this.setState({ comparacion: true });
    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;
      
      if ( primeraCarta.icono === segundaCarta.icono )
      {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }
          return { ...carta, emparejada: true };
        });
      }
      this.setState({
        parejaSeleccionada: [],
        baraja,
        comparacion : false
      });
    }, 1000);
  }
}

export default App;
