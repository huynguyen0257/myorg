import { FunctionNotImplement } from '@myorg/features/nest-common';
import { Injectable, Logger } from '@nestjs/common';
import {
  CreateFacebookAdsDto,
  UpdateFacebookAdsDto,
  ViewFacebookAdsDto,
} from './dto';

@Injectable()
export class FacebookAdsService {
  public async getAllFacebookAds(filter?: any): Promise<ViewFacebookAdsDto[]> {
    throw new FunctionNotImplement('FacebookAdsService get all');
  }

  public async getFacebookAdsById(id: string): Promise<ViewFacebookAdsDto[]> {
    throw new FunctionNotImplement('FacebookAdsService get by id');
  }

  public async create(
    model: CreateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    Logger.log(
      `Facebook ads create model: ${JSON.stringify(model, undefined, 4)}`
    );
    throw new FunctionNotImplement('FacebookAdsService create');
  }

  public async update(
    id: string,
    model: UpdateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    throw new FunctionNotImplement('FacebookAdsService update');
  }
}
