import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPersona } from './interfaces/persona.interface';
import { CrearPersonaDTO } from './dto/crear-persona.dto';

@Injectable()
export class PersonaService {
    constructor(@InjectModel('persona') private readonly personaModel: Model<IPersona>) { }
    // fetch all persona
    async getAllPersonas(): Promise<IPersona[]> {
        const personas = await this.personaModel.find().exec();
        return personas;
    }
    // Get a single persona
    async getPersona(personaID): Promise<IPersona> {
        const persona = await this.personaModel.findById(personaID).exec();
        return persona;
    }

    // Get a single persona
    async FindById(personaID): Promise<IPersona> {
        const persona = await this.personaModel.findOne({'_id' : personaID});
        return persona;
    }
    // post a single persona
    async addPersona(crearPersonaDTO: CrearPersonaDTO): Promise<IPersona> {
        const newPersona = await this.personaModel(crearPersonaDTO);
        return newPersona.save();
    }
    // Edit persona details
    async updatePersona(personaID, crearPersonaDTO: CrearPersonaDTO): Promise<IPersona> {
        const updatedPersona = await this.personaModel
            .findByIdAndUpdate(personaID, crearPersonaDTO, { new: true });
        return updatedPersona;
    }
    // Delete a persona
    async deletePersona(personaID): Promise<any> {
        const deletedPersona = await this.personaModel.findByIdAndRemove(personaID);
        return deletedPersona;
    }
}
