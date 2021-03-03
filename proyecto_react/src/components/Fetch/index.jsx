import React, { Component } from 'react';
import axios from 'axios';

export default class index extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    alert('prueba')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    const { data } = this.state;

    return (
      <div>
        <table>
          <tr>
            <td>Nombre</td>
            <td>Telefono</td>
            <td>Email</td>
          </tr>
          {
            data.map(user => {
              return(
                <tr>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}
