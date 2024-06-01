import { PartialType } from '@nestjs/mapped-types';
import { CreateParameterDefinitionDto } from './create-parameter-definition.dto';

export class UpdateParameterDefinitionDto extends PartialType(CreateParameterDefinitionDto) {}
