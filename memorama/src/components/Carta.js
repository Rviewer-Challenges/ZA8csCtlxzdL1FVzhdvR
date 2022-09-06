import React, { Component } from "react";
import "./Carta.css";
import FlipCard from "react-flipcard-2";

export default class Carta extends Component {
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <FlipCard
          flipped={this.props.comparacion || this.props.emparejada}
          disabled={true}
        >
          <div className="portada"></div>
          <div className="contenido">
            <i className={`${this.props.icono}`}></i>
          </div>
        </FlipCard>
      </div>
    );
  }
}
