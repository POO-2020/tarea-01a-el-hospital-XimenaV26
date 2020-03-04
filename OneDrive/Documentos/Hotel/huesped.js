export default class Huesped{

    /**
     * 
     * @param {string} nombre 
     * @param {string} genero 
     */

    constructor(nombre, genero){
        this.nombre = nombre; 
        this.genero = genero; 
    }

    getDescription(){
        return(`${this.nombre} genero: ${this.genero}`)
    }

}

