import { UserCase } from '@myorg/features/core';
import { ViewFacebookAdsDto } from './dto';

export class GetFacebookAdsByIdUseCase
  implements UserCase<Pick<ViewFacebookAdsDto, 'productId' | 'date'>, ViewFacebookAdsDto>
{
  public async execute(
    request: Pick<ViewFacebookAdsDto, 'productId' | 'date'>
  ): Promise<ViewFacebookAdsDto> {
    console.log(
      `Execute get facebook by id: ${JSON.stringify(request, undefined, 4)}`
    );
    throw new Error('Method not implemented.');
  }
}
