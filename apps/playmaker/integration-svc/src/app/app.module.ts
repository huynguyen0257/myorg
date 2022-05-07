import { Module } from '@nestjs/common';
import { FacebookAdsModule } from '@tommysg/facebook-ads';


@Module({
  imports: [FacebookAdsModule],
})
export class AppModule {}
