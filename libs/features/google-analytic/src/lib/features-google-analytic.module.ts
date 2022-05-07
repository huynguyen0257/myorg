import { Module } from '@nestjs/common';
import { FeaturesGoogleAnalyticController } from './features-google-analytic.controller';
import { FeaturesGoogleAnalyticService } from './features-google-analytic.service';

@Module({
  controllers: [FeaturesGoogleAnalyticController],
  providers: [FeaturesGoogleAnalyticService],
  exports: [FeaturesGoogleAnalyticService],
})
export class FeaturesGoogleAnalyticModule {}
