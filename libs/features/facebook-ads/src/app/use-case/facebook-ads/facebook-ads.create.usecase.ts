import { UserCase } from '@myorg/features/core';
import { Inject } from '@nestjs/common';
import { FacebookAdsEntity, IFacebookAdsRepository } from '../../../domain';
import { CreateFacebookAdsDto } from './dto';

export class CreateFacebookAdsUseCase
  implements UserCase<CreateFacebookAdsDto, FacebookAdsEntity>
{
  constructor(
    @Inject('facebook-ads.repository')
    private _repo: IFacebookAdsRepository
  ) {}

  public async execute(request: CreateFacebookAdsDto): Promise<FacebookAdsEntity> {
    console.log(
      `Execute create facebook: ${JSON.stringify(request, undefined, 4)}`
    );
    return await this._repo.create(await FacebookAdsEntity.create(request))
  }
}
