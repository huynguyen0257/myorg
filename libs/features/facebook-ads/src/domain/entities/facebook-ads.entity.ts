import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString, validate } from 'class-validator';

export type CreateFacebookAdsEntityType = {
  date: Date;
  productId: string;
  view: number;
  click: number;
  adSpends: number;
};

export class FacebookAdsEntity {
  @Exclude()
  @IsString()
  private _productId: string;

  @Exclude()
  @IsDate()
  private _date: Date;

  @Exclude()
  @IsNumber()
  private _view: number;

  @Exclude()
  @IsNumber()
  private _click: number;

  @Exclude()
  @IsNumber()
  private _adSpends: number;

  constructor(payload: Partial<FacebookAdsEntity>) {
    this._productId = payload.productId;
    this._date = payload.date;
    this._view = payload.view;
    this._click = payload.click;
    this._adSpends = payload.adSpends;
  }

  public static async create(
    payload: Required<FacebookAdsEntity>,
    validation = true
  ) {
    const entity = new FacebookAdsEntity(payload);
    if (validation) await validate(entity);
    return entity;
  }

  public static async updateFromModel(payload: Partial<FacebookAdsEntity>) {
    return new FacebookAdsEntity(payload);
  }

  @Expose()
  public get productId(): string {
    return this._productId;
  }

  @Expose()
  public get date(): Date {
    return this._date;
  }

  @Expose()
  public get view(): number {
    return this._view;
  }

  @Expose()
  public get click(): number {
    return this._click;
  }

  @Expose()
  public get adSpends(): number {
    return this._adSpends;
  }
}
