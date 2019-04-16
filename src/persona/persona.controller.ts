import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CrearPersonaDTO } from './dto/crear-persona.dto';
import { IPersona } from './interfaces/persona.interface';

@Controller('persona')
export class PersonaController {
    constructor(private personaService: PersonaService) { }

    // add a persona
    @Post('/create')
    async addPersona(@Res() res, @Body() crearPersonaDTO: CrearPersonaDTO) {
        const persona = await this.personaService.addPersona(crearPersonaDTO);
        return res.status(HttpStatus.OK).json({
            message: "Se guardo la persona correctamente",
            persona
        })
    }

    // Retrieve personas list
    @Get('/personas')
    async getAllPersonas(@Res() res) {
        const personas = await this.personaService.getAllPersonas();
        return res.status(HttpStatus.OK).json(personas);
    }

    // traigo todos
    @Get('')
    async getAllPersonas2(@Res() res) {
        const personas = await this.personaService.getAllPersonas();
        return res.status(HttpStatus.OK).json(personas);
    }

    // Fetch a particular persona using ID
    @Get(':personaID')
    async getPersona(@Param('personaID') personaID, @Res() res): Promise<IPersona>  {
        //return this.personaService.FindById(personaID)
        try {
            const persona = await this.personaService.FindById(personaID);
            return res.status(HttpStatus.OK).json(persona)
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error.message);//no lo encontro
        }
    }

    // Update a persona details
    @Put('/update')
    async updatePersona(@Res() res, @Query('personaID') personaID, @Body() crearPersonaDTO: CrearPersonaDTO) {
        const persona = await this.personaService.updatePersona(personaID, crearPersonaDTO);
        if (!persona) throw new NotFoundException('Persona no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'la persona fue actualizada correctamente',
            persona
        });
    }

    // Delete a persona
    @Delete('/delete')
    async deletePersona(@Res() res, @Query('personaID') personaID) {
        const persona = await this.personaService.deletePersona(personaID);
        if (!persona) throw new NotFoundException('Persona no existe');
        return res.status(HttpStatus.OK).json({
            message: 'La persona fue eliminada',
            persona
        })
    }

}
