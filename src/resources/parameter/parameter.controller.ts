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
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { ParameterService } from './parameter.service';

@Controller('v1/parameter')
export class ParameterController {
    constructor(private readonly parameterService: ParameterService) {}

    @KeycloakNoAuthentication()
    @Post()
    create(@Body() createParameterDto: any) {
        return this.parameterService.create(createParameterDto);
    }

    @KeycloakNoAuthentication()
    @Get('/company/:companyId')
    findAllByCompany(
        @Param('companyId') companyId: string,
        @Param('category') category: string,
    ) {
        return this.parameterService.findAllByCompany(companyId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parameterService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateParameterDto: UpdateParameterDto,
    ) {
        return this.parameterService.update(+id, updateParameterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parameterService.remove(+id);
    }
}
