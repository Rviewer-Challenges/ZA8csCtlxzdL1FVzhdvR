import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">Memorama</div>
        <div>
          <button className="reiniciar">Reiniciar juego</button>
        </div>
      </header>
    );
  }
}
