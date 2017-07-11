import React, { Component } from 'react';
// importamos la variable que contiene los datos
import VarPrincipalData from './PrincipalData';
// importamos componente
import MasUno from './MasUno';

import MenosUno from './MenosUno';

// añadimos la propiedad observer de mobx para ver los cambios en el componente
// varprincipaldata.numero
import { observer } from 'mobx-react';

class Principal extends Component{
    render(){
      return(
        <div>
        <h2> Trabajando con capas, desde principal</h2>
        <h2> { VarPrincipalData.numero } </h2>
        <MasUno/><MenosUno/>
        </div>
      );
    }
}
// export default Principal;

// añadimos observer a nuestro componente para que sea observador
export default observer(Principal);
