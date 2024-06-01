import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import type ParameterCategoryRepository from '../repositories/parameter-category-respository.interface';
import type ParameterCategory from '../models/ParameterCategory';
import { DatabaseError } from 'src/errors/DatabaseError';

@Injectable()
class ParameterCategoryAdapter implements ParameterCategoryRepository {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    async create(
        parameterCategory: Partial<ParameterCategory>,
    ): Promise<Partial<ParameterCategory>> {
        try {
            return await this.prismaService.parameterCategory.create({
                data: {
                    name: parameterCategory.name,
                    label: parameterCategory.label,
                },
            });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async findAll(): Promise<Partial<ParameterCategory>[]> {
        try {
            return await this.prismaService.parameterCategory.findMany({
                include: {
                    parameters_defined: true,
                },
            });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }
}

export default ParameterCategoryAdapter;
