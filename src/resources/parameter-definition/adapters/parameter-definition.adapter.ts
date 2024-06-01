import { Inject, Injectable } from '@nestjs/common';
import type ParameterDefinitionRepository from '../repositories/parameter-definition-repository.interface';
import type { ParameterDefinition } from 'src/resources/parameter/model/ParameterDefinition';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import { DatabaseError } from 'src/errors/DatabaseError';

@Injectable()
class ParameterDefinitionAdaptater implements ParameterDefinitionRepository {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    async create(data: ParameterDefinition): Promise<ParameterDefinition> {
        try {
            return await this.prismaService.parameterDefinition.create({
                data,
            });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async findAll(): Promise<ParameterDefinition[]> {
        try {
            return await this.prismaService.parameterDefinition.findMany({
                include: {
                    parameter_category: true,
                },
            });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }
}

export default ParameterDefinitionAdaptater;
