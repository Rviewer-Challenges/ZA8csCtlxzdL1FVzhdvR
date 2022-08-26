import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">Memorama</div>

        <div className="movimientos">Movimientos :</div>
        <div className="tiempo">Tiempo :</div>
        <div className="parejas">Parejas restantes :</div>
        <div>
          <button className="reiniciar">Volver a página inicial</button>
        </div>
      </header>
    );
  }
}
