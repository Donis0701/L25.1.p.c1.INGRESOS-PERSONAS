/*Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
Monto del ingreso menor: 75$
Ingreso promedio: 130$*/

import cl_mIngreso from "./cl_mIngreso.js";
import cl_vIngreso from "./cl_vIngreso.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal{
    constructor(){
        let modelo = new cl_mIngreso();
        let vista = new cl_vIngreso();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}