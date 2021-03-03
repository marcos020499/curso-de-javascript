import React, { Component } from 'react'

export default class Formulario extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      frutas: ['Platano', 'Manzana', 'Sandia'],
      input: '',
    }
  }

  handleBtnClick = () => {
    const { frutas: oldFruis, input } = this.state;

    this.setState({
      frutas: [...oldFruis, input]
    })
  }

  eliminarFruta = (nombre) => {
    const { frutas: oldFruis } = this.state;

    this.setState({
      frutas: oldFruis.filter(fruta => fruta !== nombre)
    })
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {

    const { frutas, input } = this.state;

    return (
      <div>
        <input type="text" placeholder="Nombre de la fruta" value={input} name="input" onChange={this.onChange} />
        <button onClick={this.handleBtnClick}>Agregar fruta</button>
        <button onClick={() => this.eliminarFruta('Manzana')}>Eliminar fruta</button>
        <button>Editar fruta</button>

        <ul>
          {
            frutas.map(fruta => {
              return <li>{ fruta }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

