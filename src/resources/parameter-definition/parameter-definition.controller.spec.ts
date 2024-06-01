import { Test, TestingModule } from '@nestjs/testing';
import { ParameterDefinitionController } from './parameter-definition.controller';
import { ParameterDefinitionService } from './parameter-definition.service';

describe('ParameterDefinitionController', () => {
  let controller: ParameterDefinitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParameterDefinitionController],
      providers: [ParameterDefinitionService],
    }).compile();

    controller = module.get<ParameterDefinitionController>(ParameterDefinitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
