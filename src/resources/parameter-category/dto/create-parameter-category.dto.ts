import { IsString } from 'class-validator';
import { ParameterCategoryEntity } from '../entities/parameter-category.entity';

export class CreateParameterCategoryDto extends ParameterCategoryEntity {
    @IsString()
    name: string;

    @IsString()
    label: string;
}
