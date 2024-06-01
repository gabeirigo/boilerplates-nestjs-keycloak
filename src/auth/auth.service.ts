import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { UserToken } from './jwt-keycloak-strategy/model/UserToken';

@Injectable()
export class AuthService {
    constructor(private httpService: HttpService) {}
    async login(username: string, password): Promise<UserToken> {
        const { data } = await firstValueFrom(
            this.httpService.post(
                `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
                new URLSearchParams({
                    client_id: process.env.KEYCLOAK_CLIENT_ID,
                    client_secret: process.env.KEYCLOAK_SECRET,
                    grant_type: 'password',
                    username,
                    password,
                }),
            ),
        );

        return data;
    }
}
