import { UserCase } from '@myorg/features/core';
import { UpdateFacebookAdsDto, ViewFacebookAdsDto } from './dto';

export class UpdateFacebookAdsUseCase
  implements UserCase<UpdateFacebookAdsDto & {id: string}, ViewFacebookAdsDto>
{
  public async execute(
    request: UpdateFacebookAdsDto & {id: string},
  ): Promise<ViewFacebookAdsDto> {
    console.log(
      `Execute update facebook: ${JSON.stringify(request, undefined, 4)}`
    );
    throw new Error('Method not implemented.');
  }
}
