export class Alumno {
  nombre: string;
  apellidos: string;
  nmerodeid: string;
  correoelectrnico: string;

    constructor(
        nombre: string,
        apellidos: string,
        nmerodeid: string,
        correoElectronico: string,
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nmerodeid = nmerodeid;
        this.correoelectrnico = correoElectronico;
    }
}
