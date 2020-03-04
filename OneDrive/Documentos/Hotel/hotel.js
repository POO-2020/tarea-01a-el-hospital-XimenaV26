import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Fecha from "./fecha.js"
export default class Hotel{

    /**
     * 
     * @param {string} nombre Nombre del Hotel
     * @param {Reservacion} reservaciones Las reservaciones que tiene el hotel 
     */

    constructor(nombre, reservaciones){
        this.nombre = nombre;
        this.reservaciones = new Array(); 
    }

    getNumHuespedes(){
       return (`${this.reservaciones.getNumeroHuspedes()}`);
    }

    print(){

        return(`${this.nombre} Numero de huespedes ${this.getNumHuespedes()} `);
    }


}