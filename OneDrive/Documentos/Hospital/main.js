import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{
    constructor(){
        this.hospital = new Hospital("Puerta de Hierro", "Av. De la Paz");

    }

    testCita(){
        let perfil = new Cita(new Fecha(25, 11, 2020), new Tiempo(4, 33, "PM"), new Nombre("Alfonso", "Ramirez", "peralta"),new Nombre("juan", "perez", "gonzales"));
        console.log(perfil.getPerfil())
}
    agregarDoctor(){
        let doc = new Doctor(45678, "Cirujano", "Epson Rondriguez Marinez", 3145673);

        let doc2 = new Doctor(4563, "Oculista", "Alberto Cruz Snachez", 312456312);

        this.hospital.registrarDoctor(doc);
        this.hospital.registrarDoctor(doc2);
        this.hospital.listarDoctor();
    }

    agregarCita(){
        let cita1 = new Cita(new Fecha(26, 4, 2020), new Tiempo(10, 20, "AM"), new Nombre("Ximena", "Velasco", "Godinez"),new Nombre("Rosa", "Flores", "Bivian"));

        this.hospital.registrarCita(cita1);
        this.hospital.listarCita();

    }

}

let app = new Main();
app.testCita();
app.agregarDoctor();
app.agregarCita();
