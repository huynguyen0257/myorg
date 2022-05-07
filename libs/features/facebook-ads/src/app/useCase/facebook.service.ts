import { Injectable } from "@nestjs/common";
import { CreateFacebookAdsDto, ViewFacebookAdsDto } from "./dto";

@Injectable()
export class FacebookAdsService {
  public async create(model: CreateFacebookAdsDto) : Promise<ViewFacebookAdsDto> {
    console.log('Facebook ads service create function');
    return undefined;
  }
}
