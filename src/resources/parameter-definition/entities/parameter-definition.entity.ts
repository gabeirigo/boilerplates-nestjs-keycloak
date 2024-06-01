import type { $Enums, Prisma } from '@prisma/client';

export class ParameterDefinitionEntity
    implements Prisma.ParameterDefinitionUncheckedCreateInput
{
    id?: string;
    name: string;
    label: string;
    description: string;
    field_type: $Enums.FieldTypeParameter;
    options?:
        | Prisma.ParameterDefinitionCreateoptionsInput
        | Prisma.InputJsonValue[];
    parameter_category_id?: string;
    parameter?: Prisma.ParameterUncheckedCreateNestedOneWithoutParameter_definitionInput;
}
