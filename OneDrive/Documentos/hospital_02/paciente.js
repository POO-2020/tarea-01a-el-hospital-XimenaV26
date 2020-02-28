import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
export default class Paciente{

    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */

    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono; 
    }

    getPerfil(){
        return(`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha3()}, ${this.telefono}`)

    }
}

/**let perfil2 = new Paciente(new Nombre("Felipe","Perez","Godinez"), new Fecha(23,9,2020), 312389); 
console.log(perfil2.getPerfil());**/