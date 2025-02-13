/*Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
Monto del ingreso menor: 75$
Ingreso promedio: 130$*/

import cl_Persona from "./cl_Persona.js";
import cl_Ingreso from "./cl_ingreso.js";

let persona = new cl_Persona("Mary", 150);
let persona2 = new cl_Persona("Jose", 135);
let persona3 = new cl_Persona("Carlos", 160);
let persona4 = new cl_Persona("Pedro", 75);

let ingreso = new cl_Ingreso();

ingreso.procesarPersona(persona);
ingreso.procesarPersona(persona2);
ingreso.procesarPersona(persona3);  
ingreso.procesarPersona(persona4);

let salida = document.getElementById("salida");
salida.innerHTML += `Monto del ingreso menor: ${ingreso.ingresoMenor()}$
<br>Ingreso promedio: ${ingreso.promedio()}$`;