import { UserCase } from '@myorg/features/core';
import { Inject } from '@nestjs/common';
import { FacebookAdsEntity, IFacebookAdsRepository } from '../../../domain';
import { CreateFacebookAdsDto, ViewFacebookAdsDto } from './dto';

export class CreateFacebookAdsUseCase
  implements UserCase<CreateFacebookAdsDto, ViewFacebookAdsDto>
{
  constructor(
    @Inject('facebook-ads.repository')
    private _repo: IFacebookAdsRepository
  ) {}

  public async execute(request: CreateFacebookAdsDto): Promise<ViewFacebookAdsDto> {
    console.log(
      `Execute create facebook: ${JSON.stringify(request, undefined, 4)}`
    );
    const entity = await this._repo.create(await FacebookAdsEntity.create(request))
    return Object.assign(ViewFacebookAdsDto, entity)
  }
}
