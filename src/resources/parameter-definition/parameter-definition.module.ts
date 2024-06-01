import { Module } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import { ParameterDefinitionService } from './parameter-definition.service';
import ParameterDefinitionAdaptater from './adapters/parameter-definition.adapter';
import { ParameterDefinitionController } from './parameter-definition.controller';

@Module({
    controllers: [ParameterDefinitionController],
    providers: [
        ParameterDefinitionService,
        PrismaService,
        {
            provide: ParameterDefinitionAdaptater,
            useClass: ParameterDefinitionAdaptater,
        },
    ],
})
export class ParameterDefinitionModule {}
