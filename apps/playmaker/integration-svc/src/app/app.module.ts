import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookAdsModule } from '@tommysg/facebook-ads';
import { GoogleAdsModule } from '@tommysg/google-ads-module';
import { GoogleAnalyticModule } from '@tommysg/google-analytic-module';
import { OAuthModule } from '@tommysg/oauth-module';
import { join } from 'path';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          entities: [join(__dirname, '**', '*.entity.{ts,js}')]
        });
      },
    }),
    FacebookAdsModule,
    GoogleAdsModule,
    GoogleAnalyticModule,
    OAuthModule,
  ],
})
export class AppModule {}
