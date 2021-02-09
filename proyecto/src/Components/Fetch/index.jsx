import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

document.body.style = 'background: lavender;'
export default class index extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      input: '',
      input1: '',
      input2: '',
    }
  }

  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        })
      })
      .catch(err => console.log(err))
  }
  
  handlebutton = () =>{
    const { data: photos, input, input1 } = this.state;
    if (input===''||input1===''){
      throw(alert('falta llenar un campo'))
    }
    /*if (input1===''!==Number){
      throw(alert('escriba un numero correcto como id'))
    }*/
    this.setState({
    data: [{title:input, id:input1}, ...photos]
    })

  }
  alertButton = () =>{
    alert('se muestran los detalles')
  }

  eliminar = () => {
    const { data: oldData, input2 } = this.state;
    this.setState({
      data: oldData.filter(data => data.id !== Number(input2))
    })
  }
  onChange = (e) => {
    const { name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {

    const { data, input, input1, input2} = this.state;

    return (
      <div className='fetch-component'>
        <table>
          <tr>
            <td>Titulo</td>
            <td>Id</td>
            <td>detalles</td>
          </tr>
          
          <div className='textBox'>
          <td>
            <input type="text" placeholder= "ingresa un titulo" value={ input } name= "input" onChange={this.onChange}/>
            <input type="text" placeholder= "ingresa un id" value={ input1 } name= "input1" onChange={this.onChange}/>
            <input type="text" placeholder= "ingresa los detalles"/>
            <button onClick={this.handlebutton}>Agregar titulo</button> 
            <button onClick={this.eliminar}>eliminar</button>
            <input type="text" placeholder= "id a eliminar" value={ input2 } name= "input2" onChange={this.onChange}/>
          </td> 
          </div> 
         
          {
            data.map(photo => {
              data.splice(10, 5000)
              
              //alert(data);
              return(
                <tr>
                  <td>{photo.title }</td>
                  <td>{photo.id}</td>
                  <button onClick={this.alertButton}>Mas detalles</button>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}