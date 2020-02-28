import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Tiempo from "./tiempo.js"
export default class Hospital{

    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion 
     * @param {Doctor} doctores 
     * @param {Cita} citas 
     */

    constructor(nombre, direccion, doctores, citas){
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = new Array();
        this.citas = new Array(); 
    }

    registrarDoctor(doctor){
        this.doctores.push(doctor);
    }

    listarDoctor(){
        this.doctores.forEach((doctor, i) => {console.log(`${i} ${doctor.getPerfil()}`)});
    }

    registrarCita(cita){
        this.citas.push(cita);

    }

    listarCita(){
        this.citas.forEach((cita, i) =>{console.log(`${i} ${cita.getPerfil()}`)});
    }
}