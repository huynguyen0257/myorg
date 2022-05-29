import { UserCase } from '@myorg/features/core';
import { Inject } from '@nestjs/common';
import { IFacebookAdsRepository } from '../../../domain';
import { ViewFacebookAdsDto } from './dto';

export type GetFacebookAdsFilter = {
  name?: string;
  limit?: number;
  page?: number;
};

export class GetAllFacebookAdsUseCase
  implements UserCase<GetFacebookAdsFilter, ViewFacebookAdsDto[]>
{
  constructor(
    @Inject('facebook-ads.repository')
    private _repo: IFacebookAdsRepository
  ) {}
  public async execute(
    request?: GetFacebookAdsFilter
  ): Promise<ViewFacebookAdsDto[]> {
    const entity = await this._repo.getAll();
    return entity.map((_) => ({
      id: '',
      productId: _.productId,
      date: _.date,
      view: _.view,
      click: _.click,
      adSpends: _.adSpends,
    }));
  }
}
