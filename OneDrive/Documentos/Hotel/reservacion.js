import Fecha from "./fecha.js"
import Huesped from "./huesped.js"

export default class Reservacion{

    /**
     * 
     * @param {number} numeroHabitacion El número que identifica a la habiltación, por ejemplo: 1256 ó 2345.
     * @param {Fecha} fechaLlegada La fecha de llegada de los huéspedes
     * @param {number} noches Número de noches reservadas
     * @param {Huesped} huspedes  Las personas que estarán hospedadas en esta habitación
     */

    constructor(numeroHabitacion, fechaLlegada, noches, huspedes){
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = fechaLlegada; 
        this.noches = noches;
        this.huespedes = new Array(); 
    }

    getFechaFormatoCorto(){
        return(this.fechaLlegada.getFormatoCorto());

    }

    addHuesped(huesped){
        this.huespedes.push(huesped);

    }

    getNumeroHuspedes(){
        this.huespedes.forEach((huesped, i) => {console.log(`${i} ${huesped.getDescription()}`)});
    }

    print(){
        return(`Habitacion : ${this.numeroHabitacion}
        Fecha de llegada: ${this.getFechaFormatoCorto()}
        ${this.noches} noches reservadas
        ${this.huespedes}`)
    }
}

 