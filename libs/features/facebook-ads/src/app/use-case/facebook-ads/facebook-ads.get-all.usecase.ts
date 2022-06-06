import { UserCase } from '@myorg/features/core';
import { Inject } from '@nestjs/common';
import { FacebookAdsEntity, IFacebookAdsRepository } from '../../../domain';
import { ViewFacebookAdsDto } from './dto';

export type GetFacebookAdsFilter = {
  name?: string;
  limit?: number;
  page?: number;
};

export class GetAllFacebookAdsUseCase
  implements UserCase<GetFacebookAdsFilter, FacebookAdsEntity[]>
{
  constructor(
    @Inject('facebook-ads.repository')
    private _repo: IFacebookAdsRepository
  ) {}
  public async execute(
    request?: GetFacebookAdsFilter
  ): Promise<FacebookAdsEntity[]> {
    // const entity = await this._repo.getAll();
    // return entity.map((_) => ({
    //   id: '',
    //   productId: _.productId,
    //   date: _.date,
    //   view: _.view,
    //   click: _.click,
    //   adSpends: _.adSpends,
    // }));
    return this._repo.getAll();
  }
}
