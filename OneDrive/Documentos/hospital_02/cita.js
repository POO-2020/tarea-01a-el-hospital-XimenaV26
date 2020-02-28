import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
export default class Cita{ 

    /**
     * 
     * @param {Fecha} fecha Fecha de la cita
     * @param {Tiempo} hora Hora de la cita
     * @param {Doctor} doctor Nombre del Doctor
     * @param {Paciente} paciente Nombre del paciente
     */

    constructor(fecha,hora, doctor,paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }

    getPerfil(){
        return(`${this.fecha.getFecha3()}, ${this.hora.getFormato24()}, Dr. ${this.doctor.nombre}, ${this.paciente.getNombreCompleto()}`);
    }
}

/**let perfil = new Cita(new Fecha(25, 11, 2000), new Tiempo(4, 3, "PM"), new Nombre("Alfonso", "Ramirez", "peralta"),new Nombre("juan", "perez", "gonzales"))
console.log(perfil.getPerfil())**/