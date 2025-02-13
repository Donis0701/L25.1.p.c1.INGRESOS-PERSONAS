export default class cl_Ingreso {
    constructor(){
        this.acumI= 0;
        this.cntP= 0;
        this.ingresoM = 1000;
    }
    procesarPersona(persona){
        this.acumI += persona.ingreso;
        this.cntP++;
        if(persona.ingreso < this.ingresoM){
            this.ingresoM = persona.ingreso;
        }
    }
    promedio(){
        return this.acumI / this.cntP;
    }
    ingresoMenor(){
        return this.ingresoM;
    }
}