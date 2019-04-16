import { Document } from 'mongoose';

export interface IPersona extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly email: string;
    readonly sexo: string;
    readonly sueldo: number;
    readonly ciudad_nacimiento: string;
    readonly departamento: string;
    readonly empresa: Array<IEmprsa>;
}

export interface IEmprsa extends Document {
    readonly nombre: string;
    readonly ciudad: string;
    readonly directorio: Array<IDirectorio>;
    readonly facturacion: number;
    readonly fundacion: number;
}
export interface IDirectorio extends Document {
    readonly fundador: string;
    readonly ceo: string;
    readonly gerente: string;
}