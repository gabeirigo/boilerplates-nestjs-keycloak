import { Test, TestingModule } from '@nestjs/testing';
import { ParameterDefinitionService } from './parameter-definition.service';

describe('ParameterDefinitionService', () => {
  let service: ParameterDefinitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParameterDefinitionService],
    }).compile();

    service = module.get<ParameterDefinitionService>(ParameterDefinitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
