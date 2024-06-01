import { Inject, Injectable } from '@nestjs/common';
import { CreateParameterDefinitionDto } from './dto/create-parameter-definition.dto';
import { UpdateParameterDefinitionDto } from './dto/update-parameter-definition.dto';
import ParameterDefinitionAdaptater from './adapters/parameter-definition.adapter';

@Injectable()
export class ParameterDefinitionService {
    constructor(
        @Inject(ParameterDefinitionAdaptater)
        private parameterDefinitionAdapter: ParameterDefinitionAdaptater,
    ) {}

    async create(createParameterDefinitionDto: CreateParameterDefinitionDto) {
        return await this.parameterDefinitionAdapter.create(
            createParameterDefinitionDto,
        );
    }

    async findAll() {
        return await this.parameterDefinitionAdapter.findAll();
    }

    findOne(id: number) {
        return `This action returns a #${id} parameterDefinition`;
    }

    update(
        id: number,
        updateParameterDefinitionDto: UpdateParameterDefinitionDto,
    ) {
        return `This action updates a #${id} parameterDefinition`;
    }

    remove(id: number) {
        return `This action removes a #${id} parameterDefinition`;
    }
}
