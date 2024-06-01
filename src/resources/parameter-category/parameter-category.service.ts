import { Inject, Injectable } from '@nestjs/common';
import { CreateParameterCategoryDto } from './dto/create-parameter-category.dto';
import { UpdateParameterCategoryDto } from './dto/update-parameter-category.dto';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import ParameterCategoryAdapter from './adapters/parameter-category.adapter';

@Injectable()
export class ParameterCategoryService {
    constructor(
        @Inject(ParameterCategoryAdapter)
        private parameterCategoryAdapter: ParameterCategoryAdapter,
    ) {}

    create(createParameterCategoryDto: CreateParameterCategoryDto) {
        return this.parameterCategoryAdapter.create(createParameterCategoryDto);
    }

    findAll() {
        return this.parameterCategoryAdapter.findAll();
    }

    findOne(id: number) {
        return `This action returns a #${id} parameterCategory`;
    }

    update(id: number, updateParameterCategoryDto: UpdateParameterCategoryDto) {
        return `This action updates a #${id} parameterCategory`;
    }

    remove(id: number) {
        return `This action removes a #${id} parameterCategory`;
    }
}
