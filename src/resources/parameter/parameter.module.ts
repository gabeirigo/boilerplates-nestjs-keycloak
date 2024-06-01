import { Module } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { ParameterController } from './parameter.controller';
import ParameterAdapter from './adapters/parameter.adapter';
import { PrismaService } from 'src/configs/prisma/PrismaService';

@Module({
    controllers: [ParameterController],
    providers: [
        ParameterService,
        PrismaService,
        {
            provide: ParameterAdapter,
            useClass: ParameterAdapter,
        },
    ],
})
export class ParameterModule {}
