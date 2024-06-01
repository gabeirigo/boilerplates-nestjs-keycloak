import type { Prisma } from '@prisma/client';

export class ParameterCategoryEntity
    implements Prisma.ParameterCategoryUncheckedCreateInput
{
    id?: string;
    name: string;
    label: string;
    parameter_defintion?: Prisma.ParameterDefinitionUncheckedCreateNestedManyWithoutParameter_categoryInput;
}
