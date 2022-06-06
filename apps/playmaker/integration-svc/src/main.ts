/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { SystemExceptionFilter } from '@myorg/features/nest-common';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DatabaseConfigType } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  const configService = app.get(ConfigService);
  const envFilePath = configService.get('ENV_FILE_PATH');
  const databaseConfig = configService.get<DatabaseConfigType>('database');
  Logger.log(`🔌 Application base on env file: ${envFilePath}`);
  Logger.log(
    `🔌 databaseConfig: ${JSON.stringify(databaseConfig, undefined, 4)}`
  );

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new SystemExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true
    })
  );
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
