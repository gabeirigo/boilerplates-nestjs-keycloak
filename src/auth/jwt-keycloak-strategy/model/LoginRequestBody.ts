import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginRequestBody {
    @IsEmail()
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;
}
