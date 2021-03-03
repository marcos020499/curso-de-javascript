import React, { Component } from 'react'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Panel de administración</h1>
        <p>Este contenido es privado</p>
        <button onClick={() => this.props.history.push('/')}>Cerrar sesión</button>
      </div>
    )
  }
}
