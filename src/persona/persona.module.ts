import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema } from './schemas/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'persona', schema: PersonaSchema }])
  ],
  providers: [PersonaService],
  controllers: [PersonaController]
})
export class PersonaModule {}


