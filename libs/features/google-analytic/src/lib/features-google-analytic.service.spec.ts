import { Test } from '@nestjs/testing';
import { FeaturesGoogleAnalyticService } from './features-google-analytic.service';

describe('FeaturesGoogleAnalyticService', () => {
  let service: FeaturesGoogleAnalyticService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturesGoogleAnalyticService],
    }).compile();

    service = module.get(FeaturesGoogleAnalyticService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
