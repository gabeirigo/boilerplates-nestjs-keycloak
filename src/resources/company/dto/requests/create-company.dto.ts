import { IsString } from 'class-validator';
import { CompanyEntity } from '../../entities/CompanyEntity';

export class CreateCompanyDto extends CompanyEntity {
    @IsString()
    company_name: string;

    @IsString()
    user_id: string;

    @IsString()
    identification_number: string;
}
