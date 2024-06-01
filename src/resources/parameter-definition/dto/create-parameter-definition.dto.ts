import type { $Enums, Prisma } from '@prisma/client';
import type { JsonValue } from '@prisma/client/runtime/library';
import {
    IsDefined,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateIf,
} from 'class-validator';
import { ParameterDefinitionEntity } from '../entities/parameter-definition.entity';

export class CreateParameterDefinitionDto extends ParameterDefinitionEntity {
    @IsString()
    name: string;

    @IsString()
    label: string;

    @IsString()
    description: string;

    @IsDefined()
    field_type: $Enums.FieldTypeParameter;

    @ValidateIf((o) => o.field_type === 'SELECT')
    @IsNotEmpty()
    options?: JsonValue[];

    @IsString()
    parameter_category_id: string;
}
