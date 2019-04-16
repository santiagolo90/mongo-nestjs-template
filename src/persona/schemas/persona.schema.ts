import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    sexo: String,
    sueldo: Number,
    ciudad_nacimiento: String,
    departamento: String,
    empresa: [{ nombre: String, 
                ciudad: String,
                directorio:[{fundador :String, ceo:String,gerente:String}],
                facturacion:Number,
                fundacion:Number}]
})

