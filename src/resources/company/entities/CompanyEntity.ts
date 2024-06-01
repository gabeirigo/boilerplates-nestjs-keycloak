import { Prisma } from '@prisma/client';

export class CompanyEntity implements Prisma.CompanyUncheckedCreateInput {
    id?: string;
    company_name: string;
    identification_number: string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutCompaniesInput;
    Parameters?: Prisma.ParameterUncheckedCreateNestedManyWithoutCompanyInput;
}
