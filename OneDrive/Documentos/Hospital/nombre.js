export default class Nombre{
    /**
     * 
     * @param {string} nombre Nombres
     * @param {string} apellidoPaterno Apellido paterno
     * @param {string} ApellidoMaterno Apellido materno
     */
    constructor(nombre, apellidoPaterno, ApellidoMaterno){

        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.ApellidoMaterno = ApellidoMaterno;
    }

    getNombreCompleto(){
        
        return(`${this.nombre} ${this.apellidoPaterno} ${this.ApellidoMaterno} `);
    }

    getApellidoNombre(){
       return(`${this.apellidoPaterno} ${this.ApellidoMaterno} ${this.nombre}`)
    }

    getIniciales(){
        return(`${this.nombre[0]} ${this.apellidoPaterno[0]} ${this.ApellidoMaterno[0]}`);
    }
}

    /**let paciente1 = new Nombre("Ximena", "Velasco", "Godinez");
    console.log(paciente1.getNombreCompleto());
    console.log(paciente1.getApellidoNombre());
    console.log(paciente1.getIniciales());**/
