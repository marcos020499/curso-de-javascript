import React, { Component } from 'react';

export default class index extends Component{
    render(){

        const { texto } = this.props;

        return(
            <div>
                <input type="text" placeholder= "titulo"/>
            </div>
        )
    }
}