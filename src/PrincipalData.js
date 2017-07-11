//con MobX tenemos que importar el { extendObservable, computed } from 'mobx'
import { extendObservable } from 'mobx';
// con mobx nos permite crear elementos que sean observables desde las vistas

// 1` CREAMOS LA CLASE
class PrincipalData {

  //mobx usa un contructor especial y no extienden de component
  constructor(){
    extendObservable(this,
      { numero: 0});
  }

    aumentarNumero(){
      this.numero = this.numero + 1;
  }

    disminuirNumero(){
    this.numero = this.numero - 1;
  }


}

// 2` CREAMOS LA INSTANCIA PARA PODER OBSERVARLA
// tenemos que crear una variable con uns instancia de principaldata para
// que pueda ser observada
var VarPrincipalData = new PrincipalData;

// 3` EXPORTAMOS LA INSTANCIA
export default VarPrincipalData;
