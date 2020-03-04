import Huesped from "./huesped.js"
import Fecha from "./fecha.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"
class Main{
    constructor(){
        this.reserva1 = new Reservacion(320, new Fecha(6,3,2020), 3, new Huesped("Harry Styles", "Masculino")); 

    }

    testHuesped(){
        let husped1 = new Huesped("Ximena Velasco", "Femenino");
        console.log(husped1.getDescription()); 
    }

    testereservacion(){
        let reserva1 = new Reservacion(342, new Fecha(2,4,2020), 3, new Huesped("Ximena Godinez", "Femenino"));
        console.log(reserva1.print());
    }

    addHuesped(){
        let huesped1 = new Huesped("Gloria Godinez", "Femenino");
        let huesped2 = new Huesped("Victoria Zambrano", "Femenino");
        this.reserva1.addHuesped(huesped2)
        this.reserva1.addHuesped(huesped1); 
        this.reserva1.getNumeroHuspedes(); 
        

    }

    testHotel(){
        let hotel1 = new Hotel("Ximena Palms", 1);
        
    }
}

let app = new Main();
app.testHotel();
app.testereservacion();
app.addHuesped(); 