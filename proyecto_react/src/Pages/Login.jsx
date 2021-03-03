import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Introduce tu usuario"></input>
        <input type="password" placeholder="Introduce tu contraseña"></input>
        <button onClick={() => this.props.history.push('/admin')}>Iniciar sesión</button>
      </div>
    )
  }
}
