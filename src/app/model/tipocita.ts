export class TipoCita{

    idTipoCita: number;

    idTipoCita: number = 0;

    nombre?: string;

    constructor(cod:number, nom:string) {
        this.idTipoCita = cod
        this.nombre = nom
    }
}