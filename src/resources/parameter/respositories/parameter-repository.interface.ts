import type { Parameter } from '../model/Parameter';
import type { ParameterDefinition } from '../model/ParameterDefinition';

interface ParameterRepository {
    create(parameter: Parameter): Promise<Parameter>;
    findAllByCompany(companyId: string): Promise<Parameter[]>;
}

export default ParameterRepository;
