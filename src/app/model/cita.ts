import { TipoCita } from "./tipocita";
import { Usuario } from "./usuario";

export class Cita{
    idCita?: number;
    dni?: number;
    peso?: number;
    altura?: number;
    sexo?: string;
    fecha?: Date;
    estado?: number;
    tipocita?: TipoCita;
    usuario?: Usuario;
}