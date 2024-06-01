import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prisma/PrismaService';
import { DatabaseError } from 'src/errors/DatabaseError';

import type { Parameter } from '../model/Parameter';
import type ParameterRepository from '../respositories/parameter-repository.interface';

@Injectable()
class ParameterAdapter implements ParameterRepository {
    constructor(private prismaService: PrismaService) {}

    async create(data: Parameter): Promise<Parameter> {
        try {
            return await this.prismaService.parameter.create({
                data: {
                    value: data.value,
                    company: {
                        connect: {
                            id: data.company_id,
                        },
                    },
                    parameter_definition: {
                        connect: {
                            id: data.parameter_definition_id,
                        },
                    },
                },
            });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async findAllByCompany(companyId: string): Promise<Parameter[]> {
        try {
            const parameters = await this.prismaService.parameter.findMany({
                include: {
                    parameter_definition: true,
                },
                where: {
                    company_id: companyId,
                },
            });

            return parameters;
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }
}

export default ParameterAdapter;
