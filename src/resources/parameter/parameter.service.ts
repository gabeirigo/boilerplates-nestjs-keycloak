import { Inject, Injectable } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import ParameterAdapter from './adapters/parameter.adapter';

@Injectable()
export class ParameterService {
    constructor(
        @Inject(ParameterAdapter) private parameterAdapter: ParameterAdapter,
    ) {}

    async create(createParameterDto: CreateParameterDto) {
        return await this.parameterAdapter.create(createParameterDto);
    }

    findAll() {
        return `This action returns all parameter`;
    }

    async findAllByCompany(companyId: string) {
        return await this.parameterAdapter.findAllByCompany(companyId);
    }

    findOne(id: number) {
        return `This action returns a #${id} parameter`;
    }

    update(id: number, updateParameterDto: UpdateParameterDto) {
        return `This action updates a #${id} parameter`;
    }

    remove(id: number) {
        return `This action removes a #${id} parameter`;
    }
}
