import Cita from "./cita.js"
export default class Doctor{

    /**
     * 
     * @param {string} nombre Nombre del Doctor
     * @param {string} especialidad Especialidad del doctor
     * @param {number} telefono Telefono del doctor
     * @param {number} cedula Numero de cedula del doctor
     */

    constructor(cedula, especialidad, nombre, telefono){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula; 
    }

    getPerfil(){
        return(`Cedula: ${this.cedula}, Especialidad: ${this.especialidad}, ${this.nombre}, Tel: ${this.telefono}`);
    }
}

/**let dotor = new Doctor(23456, "Pedriatra", "Antonieta Huerta Puelido", 3124564327); 
console.log(dotor.getPerfil());**/