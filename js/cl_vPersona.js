export default class cl_vPersona{
    constructor(){
        this.inNombre = document.getElementById("personaForm_inNombre");
        this.inIngreso = document.getElementById("personaForm_inIngreso");
        this.btProcesar = document.getElementById("personaForm_btProcesar");
    }
    get nombre(){
        return this.inNombre.value;
    }
    get ingreso(){ 
        return +this.inIngreso.value;
    }
}