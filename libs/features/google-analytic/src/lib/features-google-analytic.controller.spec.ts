import { Test } from '@nestjs/testing';
import { FeaturesGoogleAnalyticController } from './features-google-analytic.controller';
import { FeaturesGoogleAnalyticService } from './features-google-analytic.service';

describe('FeaturesGoogleAnalyticController', () => {
  let controller: FeaturesGoogleAnalyticController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturesGoogleAnalyticService],
      controllers: [FeaturesGoogleAnalyticController],
    }).compile();

    controller = module.get(FeaturesGoogleAnalyticController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
