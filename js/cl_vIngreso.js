import cl_mPersona from "./cl_mPersona.js";
import cl_vPersona from "./cl_vPersona.js";
export default class cl_vIngreso{
    constructor(){
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vPersona = new cl_vPersona();
        this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersona();
    }
    procesarPersona(){
        this.mPersona = new cl_mPersona({
            nombre: this.vPersona.nombre, 
            ingreso: this.vPersona.ingreso});
        return this.mPersona;
    }
    reportarIngreso(promedio, ingresoMenor){
        this.salida.innerHTML = `Monto del ingreso menor: ${ingresoMenor}$<br>`+
        `Ingreso promedio: ${promedio}$`;
    }
    
}