//con MobX tenemos que importar el { extendObservable, computed } from 'mobx'
import { extendObservable } from 'mobx';
// con mobx nos permite crear elementos que sean observables desde las vistas

class PrincipalData {
  //mobx usa un contructor especial y no extienden de component
  constructor(){
    extendObservable(this,
      { numero: 0});
  }
}

// tenemos que crear una variable con uns instancia de principaldata para
// que pueda ser observada
var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;
