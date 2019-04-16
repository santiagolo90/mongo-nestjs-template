export class CrearPersonaDTO {
    readonly nombre: string;
    readonly apellido: string;
    readonly email: string;
    readonly sexo: string;
    readonly sueldo: number;
    readonly ciudad_nacimiento: string;
    readonly departamento: string;
    readonly empresa: Array<CrearEmpresaDTO>;
}

export class CrearEmpresaDTO {
    readonly nombre: string;
    readonly ciudad: string;
    readonly directorio: Array<CrearDirectorioDTO>;
    readonly facturacion: number;
    readonly fundacion: number;
}
export class CrearDirectorioDTO {
    readonly fundador: string;
    readonly ceo: string;
    readonly gerente: string;
}
/*
{
    "_id":"5cb08599d294136491aee962",
    "nombre":"Craig",
    "apellido":"Andrews",
    "email":"candrews3@yolasite.com",
    "sexo":"Male",
    "sueldo":22364,
    "ciudad_nacimiento":"Pennsylvania",
    "departamento":"Accounting",
    "empresa":[{"nombre":"Klein-Grant",
                "ciudad":"New York",
                "directorio":[{"fundador":"Mary Richardson",
                                "ceo":"Sarah Stephens",
                                "gerente":"Stephen Wilson"}],
                "facturacion":17066761,
                "fundacion":1986}]
}
*/