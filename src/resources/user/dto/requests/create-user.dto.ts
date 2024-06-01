import { Role } from '@prisma/client';
import { IsDefined, IsEmail, IsString } from 'class-validator';
import { User } from '../../entities/user.entity';

export class CreateUserDto extends User {
    @IsEmail()
    email: string;

    @IsString()
    keycloak_id: string;

    @IsString()
    nickname: string;

    @IsDefined()
    role: Role;
}
