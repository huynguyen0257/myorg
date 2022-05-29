import { OmitType } from "@nestjs/mapped-types";
import { ViewFacebookAdsDto } from "./view.facebook-ads.model";

export class CreateFacebookAdsDto extends OmitType(ViewFacebookAdsDto, [] as const) {}
