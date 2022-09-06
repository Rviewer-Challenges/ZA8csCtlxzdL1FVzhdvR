import React, { Component } from "react";
import Cronometro from "./Cronometro";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">Memorama</div>

        <div className="movimientos">Movimientos : {this.props.numeroIntentos}</div>
        <div className="tiempo">Tiempo :<Cronometro/></div>
        <div className="parejas">Parejas restantes :</div>
        <div>
          <button className="reiniciar" onClick={this.props.reiniciarPartida}>Reiniciar </button>
        </div>
      </header>
    );
  }
}
