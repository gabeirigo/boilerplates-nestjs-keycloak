import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-keycloak-strategy/jwt.auth.guard';
import { CompanyModule } from './resources/company/company.module';
import { ParameterCategoryModule } from './resources/parameter-category/parameter-category.module';
import { ParameterDefinitionModule } from './resources/parameter-definition/parameter-definition.module';
import { ParameterModule } from './resources/parameter/parameter.module';
import { UserModule } from './resources/user/user.module';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: '365d',
            },
        }),
        HttpModule,
        AuthModule,
        UserModule,
        CompanyModule,
        ParameterModule,
        ParameterDefinitionModule,
        ParameterCategoryModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}
