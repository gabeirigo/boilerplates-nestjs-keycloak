import { $Enums, Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
    id?: string;
    email: string;
    keycloak_id: string;
    nickname: string;
    attributes?: Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue;
    address_id?: string;
    contact_id?: string;
    role: $Enums.Role;
    Contacts?: Prisma.ContactUncheckedCreateNestedManyWithoutUserInput;
    Addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    Companies?: Prisma.CompanyUncheckedCreateNestedManyWithoutUsersInput;
}
