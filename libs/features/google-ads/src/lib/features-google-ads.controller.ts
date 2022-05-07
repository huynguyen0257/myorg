import { Controller } from '@nestjs/common';
import { FeaturesGoogleAdsService } from './features-google-ads.service';

@Controller('features-google-ads')
export class FeaturesGoogleAdsController {
  constructor(private featuresGoogleAdsService: FeaturesGoogleAdsService) {}
}
