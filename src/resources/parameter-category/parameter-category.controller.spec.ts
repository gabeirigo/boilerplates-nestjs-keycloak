import { Test, TestingModule } from '@nestjs/testing';
import { ParameterCategoryController } from './parameter-category.controller';
import { ParameterCategoryService } from './parameter-category.service';

describe('ParameterCategoryController', () => {
  let controller: ParameterCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParameterCategoryController],
      providers: [ParameterCategoryService],
    }).compile();

    controller = module.get<ParameterCategoryController>(ParameterCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
