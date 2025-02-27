export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPersona() {
        this.modelo.procesarPersona(this.vista.vPersona);
        this.vista.reportarIngreso(this.modelo.promedio(),this.modelo.ingresoMenor());
    }
}