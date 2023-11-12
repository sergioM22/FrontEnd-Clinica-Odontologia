export class TipoCita{
    idTipoCita?: number;
    nombre?: string;

    constructor(cod:number, nom:string) {
        this.idTipoCita = cod
        this.nombre = nom
    }
}