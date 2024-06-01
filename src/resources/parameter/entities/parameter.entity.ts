import type { Prisma } from '@prisma/client';

export class ParameterEntity implements Prisma.ParameterUncheckedCreateInput {
    value: string;
    id?: string;
    company_id?: string;
    parameter_definition_id: string;
}
