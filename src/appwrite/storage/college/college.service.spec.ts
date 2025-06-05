import { Test, TestingModule } from '@nestjs/testing';
import { CollegeStorageService } from './college.service';

describe('CollegeService', () => {
  let service: CollegeStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegeStorageService],
    }).compile();

    service = module.get<CollegeStorageService>(CollegeStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
