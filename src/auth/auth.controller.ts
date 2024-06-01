import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './jwt-keycloak-strategy/model/LoginRequestBody';
import { KeycloakNoAuthentication } from './jwt-keycloak-strategy/no-authentication.decorator';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @KeycloakNoAuthentication()
    @Post('auth')
    @HttpCode(HttpStatus.OK)
    login(@Body() { username, password }: LoginRequestBody) {
        return this.authService.login(username, password);
    }
}
