import { Controller } from '@nestjs/common';
import { FeaturesGoogleAnalyticService } from './features-google-analytic.service';

@Controller('features-google-analytic')
export class FeaturesGoogleAnalyticController {
  constructor(
    private featuresGoogleAnalyticService: FeaturesGoogleAnalyticService
  ) {}
}
