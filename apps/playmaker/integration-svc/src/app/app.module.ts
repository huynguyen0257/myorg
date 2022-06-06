import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-ioredis';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookAdsModule } from '@tommysg/facebook-ads';
import { GoogleAdsModule } from '@tommysg/google-ads-module';
import { GoogleAnalyticModule } from '@tommysg/google-analytic-module';
import { OAuthModule } from '@tommysg/oauth-module';
import { join } from 'path';
import { getConnectionOptions } from 'typeorm';
import configuration from '../config';
import ConfigSchemaValidation from '../config/config.schema';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        });
      },
    }),
    ConfigModule.forRoot({
      // envFilePath: '.env.local',
      isGlobal: true,
      load: [configuration],
      validationSchema: ConfigSchemaValidation,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    CacheModule.register<ClientOpts>({
      store: redisStore,
      password: 'dev@123',
      db:3,
      ttl:0,
      isGlobal: true,
      max: 10,
    }),
    FacebookAdsModule,
    GoogleAdsModule,
    GoogleAnalyticModule,
    OAuthModule,
  ],
})
export class AppModule {}
