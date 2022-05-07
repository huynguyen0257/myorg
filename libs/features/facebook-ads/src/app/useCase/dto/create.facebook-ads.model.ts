import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateFacebookAdsDto {
  @IsString()
  public productId: string;

  @IsDate()
  public date: Date;

  @IsNumber()
  public view: number;

  @IsNumber()
  public click: number;

  @IsNumber()
  public adSpends: number;
}
