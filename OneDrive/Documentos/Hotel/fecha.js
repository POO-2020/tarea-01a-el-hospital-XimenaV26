
export default class Fecha { 
    /**
     * 
     * @param {number}  dia valor 1..31
     * @param {number}  mes valor 1..12
     * @param {number}  año Año de la fecha de nacimiento
     */
    
     constructor(dia, mes, año) {
         this.fecha = new Date(año, mes - 1, dia);
         this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
         this.diaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
         this.fecha3 = new Date; 
}


getFormatoCorto() {
    let date = this.fecha.getDate();
    let month = this.fecha.getMonth() + 1; 
    let year = this.fecha.getFullYear(); 
    return`${date}/${month}/${year}`;
}
}