import React, { Component } from 'react';
import './style.css';
import { getAge, getUsername, getType } from '../../util';

export default class button extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      comidas: ["pizza", "tacos", "tortas"]
    }
  }

  btnHandler = (comidaParaMostrar) => {
    this.setState({
      comidas: this.state.comidas.filter(comida => comida === comidaParaMostrar)
    })
  }

  render() {

    const { comidas } = this.state;

    return (
      <div className="button-component">
        <p>{getUsername()}</p>
        <button onClick={() => this.btnHandler('tortas')}>LISTA TACOS</button>
        {
          comidas.map(comidaActual => {
            return <p>{comidaActual}</p>
          })
        }
      </div>
    )
  }
}