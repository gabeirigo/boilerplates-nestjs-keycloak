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
import { CreateParameterCategoryDto } from './dto/create-parameter-category.dto';
import { UpdateParameterCategoryDto } from './dto/update-parameter-category.dto';
import { ParameterCategoryService } from './parameter-category.service';

@Controller('v1/parameter-category')
export class ParameterCategoryController {
    constructor(
        private readonly parameterCategoryService: ParameterCategoryService,
    ) {}

    @KeycloakNoAuthentication()
    @Post()
    create(@Body() createParameterCategoryDto: CreateParameterCategoryDto) {
        return this.parameterCategoryService.create(createParameterCategoryDto);
    }

    @KeycloakNoAuthentication()
    @Get()
    findAll() {
        return this.parameterCategoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parameterCategoryService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateParameterCategoryDto: UpdateParameterCategoryDto,
    ) {
        return this.parameterCategoryService.update(
            +id,
            updateParameterCategoryDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parameterCategoryService.remove(+id);
    }
}
