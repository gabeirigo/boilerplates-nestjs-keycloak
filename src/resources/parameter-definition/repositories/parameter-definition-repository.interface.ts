import type { ParameterDefinition } from 'src/resources/parameter/model/ParameterDefinition';

interface ParameterDefinitionRepository {
    create(
        parameterDefinition: ParameterDefinition,
    ): Promise<ParameterDefinition>;

    findAll(): Promise<ParameterDefinition[]>;
}

export default ParameterDefinitionRepository;
