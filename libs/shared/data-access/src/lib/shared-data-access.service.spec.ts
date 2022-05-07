import { Test } from '@nestjs/testing';
import { SharedDataAccessService } from './shared-data-access.service';

describe('SharedDataAccessService', () => {
  let service: SharedDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedDataAccessService],
    }).compile();

    service = module.get(SharedDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
