import { UserCase } from '@myorg/features/core';
import { FunctionNotImplement } from '@myorg/features/nest-common';
import { Inject } from '@nestjs/common';
import { FacebookAdsEntity, IFacebookAdsRepository } from '../../../domain';

export class GetFacebookAdsByIdUseCase
  implements UserCase<Pick<FacebookAdsEntity, 'productId' | 'date'>, FacebookAdsEntity>
{
  constructor(
    @Inject('facebook-ads.repository')
    private _repo: IFacebookAdsRepository
  ) {}

  public async execute(
    request: Pick<FacebookAdsEntity, 'productId' | 'date'>
  ): Promise<FacebookAdsEntity> {
    console.log(
      `Execute get facebook by id: ${JSON.stringify(request, undefined, 4)}`
    );
    throw new FunctionNotImplement('GetFacebookAdsByIdUseCase')
  }
}
