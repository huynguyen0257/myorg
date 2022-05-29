import { PartialType } from "@nestjs/mapped-types";
import { CreateFacebookAdsDto } from "./create.facebook-ads.model";

export class UpdateFacebookAdsDto extends PartialType(CreateFacebookAdsDto) {}
