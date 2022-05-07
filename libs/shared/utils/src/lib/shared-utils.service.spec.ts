import { Test } from '@nestjs/testing';
import { SharedUtilsService } from './shared-utils.service';

describe('SharedUtilsService', () => {
  let service: SharedUtilsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedUtilsService],
    }).compile();

    service = module.get(SharedUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
