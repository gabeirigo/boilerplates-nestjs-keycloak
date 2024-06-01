import { IsJSON, IsString } from 'class-validator';
import { ParameterEntity } from '../entities/parameter.entity';
import type { Prisma } from '@prisma/client';

export class CreateParameterDto extends ParameterEntity {
    @IsString()
    company_id: string;

    @IsString()
    value: string;

    @IsString()
    parameter_definition_id: string;
}
