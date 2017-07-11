import React, { Component } from 'react';

// impotamos las funciones que vamos a usar en el botton
import VarPrincipalData from './PrincipalData';

class MenosUno extends Component {

  render(){
    return(
      <div>
      <button onClick= {function(){{ VarPrincipalData.disminuirNumero() }}} >Disminuir</button>
      </div>
    )
  }
}

// DE ESTA FORMA NO VA A FUNCIONAR POR SU CONTEXTO
//<button onClick= { VarPrincipalData.aumentarNumero } >Aumentar</button>

//HAY QUE MODIFICARLA POR:
//<button onClick= {function(){{ VarPrincipalData.aumentarNumero() }}}
export default MenosUno;
