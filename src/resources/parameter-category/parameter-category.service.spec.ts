import { Test, TestingModule } from '@nestjs/testing';
import { ParameterCategoryService } from './parameter-category.service';

describe('ParameterCategoryService', () => {
  let service: ParameterCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParameterCategoryService],
    }).compile();

    service = module.get<ParameterCategoryService>(ParameterCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
