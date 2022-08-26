import React, { Component } from "react";
import "./Tablero.css";
import Carta from "./Carta";

export default class Tablero extends Component {
  render() {
    return (
      <div className="tablero">
        {this.props.baraja.map((carta, index) => {
          const comparacion = this.props.parejaSeleccionada.indexOf(carta) > -1;
          return (
            <Carta
              icono={carta.icono}
              key={index}
              comparacion={comparacion}
              seleccionarCarta={() => this.props.seleccionarCarta(carta)}
              emparejada={carta.emparejada}
            />
          );
        })}
      </div>
    );
  }
}
