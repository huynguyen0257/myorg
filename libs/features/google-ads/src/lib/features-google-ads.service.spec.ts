import { Test } from '@nestjs/testing';
import { FeaturesGoogleAdsService } from './features-google-ads.service';

describe('FeaturesGoogleAdsService', () => {
  let service: FeaturesGoogleAdsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturesGoogleAdsService],
    }).compile();

    service = module.get(FeaturesGoogleAdsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
