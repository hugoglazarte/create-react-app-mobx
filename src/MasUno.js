import React, { Component } from 'react';

// impotamos las funciones que vamos a usar en el botton
import VarPrincipalData from './PrincipalData';

class MasUno extends Component {

  temporal(){
    console.log('test');
    //creamos esta funcion para ver el comportamiento de los contextos en los botones
  }

  render(){
    return(
      <div>
      <button onClick={ this.temporal.bind(this) }>otraFuncion</button>
      <button onClick= {function(){{ VarPrincipalData.aumentarNumero() }}} >Aumentar</button>
      </div>
    )
  }
}

// DE ESTA FORMA NO VA A FUNCIONAR POR SU CONTEXTO
//<button onClick= { VarPrincipalData.aumentarNumero } >Aumentar</button>

//HAY QUE MODIFICARLA POR:
//<button onClick= {function(){{ VarPrincipalData.aumentarNumero() }}}
export default MasUno;
