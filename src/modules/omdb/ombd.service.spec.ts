import { Test, TestingModule } from '@nestjs/testing';
import { OmbdService } from './ombd.service';

describe('OmbdService', () => {
  let service: OmbdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmbdService],
    }).compile();

    service = module.get<OmbdService>(OmbdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
