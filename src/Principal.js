import React, { Component } from 'react';
// importamos la variable que contiene los datos
import VarPrincipalData from './PrincipalData';

class Principal extends Component{
    render(){
      return(
        <div>
        <h2> Trabajando con capas, desde principal</h2>
        <h2> { VarPrincipalData.numero } </h2>
        </div>
      );
    }
}
export default Principal;
