import type ParameterCategory from '../models/ParameterCategory';

interface ParameterCategoryRepository {
    create(
        parameterCategory: ParameterCategory,
    ): Promise<Partial<ParameterCategory>>;

    findAll(): Promise<Partial<ParameterCategory>[]>;
}

export default ParameterCategoryRepository;
