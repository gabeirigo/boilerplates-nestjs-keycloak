import { Module } from '@nestjs/common';
import { ParameterCategoryService } from './parameter-category.service';
import { ParameterCategoryController } from './parameter-category.controller';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import ParameterCategoryAdapter from './adapters/parameter-category.adapter';

@Module({
    controllers: [ParameterCategoryController],
    providers: [
        ParameterCategoryService,
        PrismaService,
        {
            provide: ParameterCategoryAdapter,
            useClass: ParameterCategoryAdapter,
        },
    ],
})
export class ParameterCategoryModule {}
