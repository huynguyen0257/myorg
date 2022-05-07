import { Test } from '@nestjs/testing';
import { FeaturesGoogleAdsController } from './features-google-ads.controller';
import { FeaturesGoogleAdsService } from './features-google-ads.service';

describe('FeaturesGoogleAdsController', () => {
  let controller: FeaturesGoogleAdsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturesGoogleAdsService],
      controllers: [FeaturesGoogleAdsController],
    }).compile();

    controller = module.get(FeaturesGoogleAdsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
