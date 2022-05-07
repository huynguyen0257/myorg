import { Module } from '@nestjs/common';
import { FacebookAdsModule } from '@tommysg/facebook-ads';
import { GoogleAdsModule } from '@tommysg/google-ads-module';
import { GoogleAnalyticModule } from '@tommysg/google-analytic-module';
import { OAuthModule } from '@tommysg/oauth-module';

@Module({
  imports: [
    FacebookAdsModule,
    GoogleAdsModule,
    GoogleAnalyticModule,
    OAuthModule,
  ],
})
export class AppModule {}
