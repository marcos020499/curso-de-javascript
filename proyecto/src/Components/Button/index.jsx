import React, { Component } from 'react';
import './style.css';

export default  class Button extends Component{

    constructor(props){
        super(props)
        this.state = {
            input: '',
            input1: '',
        }
    }
    handlebutton = () =>{
        const { data: photos, input, input1 } = this.state;
        if (input===''||input1===''){
          throw(alert('falta llenar un campo'))
        }
        this.setState({
        data: [{title:input, id:input1}, ...photos]
        })
    
      }

      onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    render(){
        const { input, input1 } = this.state;

        return(
            <div className='button-component'>
                <button onClick={this.handlebutton}>Agregar titulo</button> 
            </div>
        )
    }
}
