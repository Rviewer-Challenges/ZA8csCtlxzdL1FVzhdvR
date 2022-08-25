import React, { Component } from "react";
import "./Tablero.css";
import Carta from "./Carta";

export default class Tablero extends Component {
  render() {
    const cartas = [1, 2, 3, 4, 5, 6];
    return (
      <div className="tablero">
        {cartas.map((carta) => (
          <Carta/>
        ))}
      </div>
    );
  }
}
