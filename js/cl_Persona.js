export default class cl_Persona {
    constructor(nombre, ingreso) {
        this._nombre = nombre;
        this._ingreso = ingreso;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set ingreso(i){
        this._ingreso = +i;
    }
    get ingreso(){
        return this._ingreso;
    }
}