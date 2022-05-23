import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateFacebookAdsUseCase,
  GetAllFacebookAdsUseCase,
  GetFacebookAdsByIdUseCase,
  RemoveFacebookAdsUseCase,
  UpdateFacebookAdsUseCase,
} from './app';
import { FacebookAdsController } from './controller';
import { FacebookAdsEntityTable, FacebookAdsTypeOrmRepository } from './framework';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacebookAdsEntityTable])
  ],
  controllers: [FacebookAdsController],
  providers: [
    GetAllFacebookAdsUseCase,
    CreateFacebookAdsUseCase,
    GetFacebookAdsByIdUseCase,
    UpdateFacebookAdsUseCase,
    RemoveFacebookAdsUseCase,
    {
      provide: 'facebook-ads.repository',
      useClass: FacebookAdsTypeOrmRepository,
    },
  ],
})
export class FacebookAdsModule {}
