import { Module } from '@nestjs/common';
import { FacebookAdsService } from './app';
import { FacebookAdsController } from './controller';

@Module({
  controllers: [FacebookAdsController],
  providers: [FacebookAdsService],
})
export class FacebookAdsModule {}
