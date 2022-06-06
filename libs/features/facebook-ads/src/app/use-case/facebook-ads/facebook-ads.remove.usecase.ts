import { UserCase } from '@myorg/features/core';
import { FunctionNotImplement } from '@myorg/features/nest-common';
import { FacebookAdsEntity } from '../../../domain';

export class RemoveFacebookAdsUseCase
  implements UserCase<Pick<FacebookAdsEntity, 'productId' | 'date'>, FacebookAdsEntity>
{
  public async execute(
    request: Pick<FacebookAdsEntity, 'productId' | 'date'>
  ): Promise<FacebookAdsEntity> {
    console.log(
      `Execute remove facebook: ${JSON.stringify(request, undefined, 4)}`
    );
    throw new FunctionNotImplement('RemoveFacebookAdsUseCase')
  }
}
