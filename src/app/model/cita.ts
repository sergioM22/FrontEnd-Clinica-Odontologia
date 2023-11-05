import { TipoCita } from "./tipocita";
import { Usuario } from "./usuario";

export class Cita{
    idCita: number;
    altura: number;
    dni: number;
    estado: number;
    fecha: Date;
    peso: number;
    sexo: string;
    tipocita: TipoCita;
    usuario: Usuario;
}