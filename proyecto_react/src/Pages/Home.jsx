import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Archivo index publico</h1>
        <button onClick={() => this.props.history.push('/login')}>Iniciar sesión en la página</button>
      </div>
    )
  }
}
