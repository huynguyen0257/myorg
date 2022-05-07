import { Controller, Post } from "@nestjs/common";
import { FacebookAdsService } from "../app";
import { ViewFacebookAdsDto } from "../app/useCase/dto";

@Controller('facebook-ads')
export class FacebookAdsController {
  constructor(private _service: FacebookAdsService) {}

  @Post()
  create() : Promise<ViewFacebookAdsDto> {
    return this._service.create({} as any);
  }
}
