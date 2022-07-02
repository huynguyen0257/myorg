import * as request from 'supertest';
import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-ioredis';
import { CacheModule, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import {
  FacebookAdsEntity,
  FacebookAdsModule,
  GetAllFacebookAdsUseCase,
} from '../..';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { join } from 'path';

describe('FacebookAdsController', () => {
  let app: INestApplication;
  let entity: FacebookAdsEntity;
  const data: Required<FacebookAdsEntity> = {
    productId: 'P01',
    date: new Date(),
    adSpends: 0,
    click: 0,
    view: 0,
  };
  let getAllUC;

  beforeAll(async () => {
    entity = await FacebookAdsEntity.create(data);
    getAllUC = {
      execute: async () => {
        return [entity];
      },
    };

    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            return Object.assign(await getConnectionOptions(), {
              autoLoadEntities: true,
              entities: [join(__dirname, '**', '*.entity.{ts,js}')],
            });
          },
        }),
        CacheModule.register<ClientOpts>({
          store: redisStore,
          password: 'dev@123',
          db: 3,
          ttl: 0,
          isGlobal: true,
          max: 10,
        }),
        FacebookAdsModule,
      ],
    })
      .overrideProvider(GetAllFacebookAdsUseCase)
      .useValue(getAllUC)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('/GET all', () => {
    jest.setTimeout(15000);
    it('should return an array of facebook ads', async () => {
      return request(app.getHttpServer())
        .get('/facebook-ads')
        .expect(200)
        .expect({
          data: [data],
        });
    });
  });

  describe('/POST', () => {
    it('should status code 201', async () => {
      return request(app.getHttpServer())
        .post('/facebook-ads')
        .send(data)
        .expect(201);
    });
    it('should status code contain created entity', async () => {
      return (
        request(app.getHttpServer())
          .post('/facebook-ads')
          .send(data)
          // .then(response => {
          //   const {data :result} = response.body;
          //   console.log(`result.date: ${typeof result.date}`);
          // })
          .expect({
            data,
          })
      );
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
