import { Module } from '@nestjs/common';
import { FeaturesGoogleAdsController } from './features-google-ads.controller';
import { FeaturesGoogleAdsService } from './features-google-ads.service';

@Module({
  controllers: [FeaturesGoogleAdsController],
  providers: [FeaturesGoogleAdsService],
  exports: [FeaturesGoogleAdsService],
})
export class FeaturesGoogleAdsModule {}
