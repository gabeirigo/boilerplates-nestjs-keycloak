import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { KeycloakNoAuthentication } from 'src/auth/jwt-keycloak-strategy/no-authentication.decorator';
import { CreateParameterDefinitionDto } from './dto/create-parameter-definition.dto';
import { UpdateParameterDefinitionDto } from './dto/update-parameter-definition.dto';
import { ParameterDefinitionService } from './parameter-definition.service';

@Controller('v1/parameter-definition')
export class ParameterDefinitionController {
    constructor(
        private readonly parameterDefinitionService: ParameterDefinitionService,
    ) {}

    @KeycloakNoAuthentication()
    @Post()
    create(@Body() createParameterDefinitionDto: CreateParameterDefinitionDto) {
        return this.parameterDefinitionService.create(
            createParameterDefinitionDto,
        );
    }

    @KeycloakNoAuthentication()
    @Get()
    findAll() {
        return this.parameterDefinitionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parameterDefinitionService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateParameterDefinitionDto: UpdateParameterDefinitionDto,
    ) {
        return this.parameterDefinitionService.update(
            +id,
            updateParameterDefinitionDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parameterDefinitionService.remove(+id);
    }
}
