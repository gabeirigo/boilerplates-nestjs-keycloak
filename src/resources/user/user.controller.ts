import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
} from '@nestjs/common';
import { Request } from 'express';

import { KeycloakNoAuthentication } from 'src/auth/jwt-keycloak-strategy/no-authentication.decorator';
import { CreateUserDto } from './dto/requests/create-user.dto';
import { UpdateUserDto } from './dto/requests/update-user.dto';
import { UserService } from './user.service';

@Controller('v1/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @KeycloakNoAuthentication()
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get('verify-token')
    requestUserByToken(@Req() request: Request) {
        return this.userService.requestUserByToken(request);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
