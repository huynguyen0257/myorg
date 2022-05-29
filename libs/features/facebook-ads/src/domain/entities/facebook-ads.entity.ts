import { IsDate, IsNumber, IsString, validate } from 'class-validator';

export type CreateFacebookAdsEntityType = {
  date: Date;
  productId: string;
  view: number;
  click: number;
  adSpends: number;
};

export class FacebookAdsEntity {
  @IsString()
  private _productId: string;

  @IsDate()
  private _date: Date;

  @IsNumber()
  private _view: number;

  @IsNumber()
  private _click: number;

  @IsNumber()
  private _adSpends: number;

  constructor(
    productId: string,
    date: Date,
    view: number,
    click: number,
    adSpends: number
  ) {
    this._productId = productId;
    this._date = date;
    this._view = view;
    this._click = click;
    this._adSpends = adSpends;
  }

  public static async create(payload: Omit<FacebookAdsEntity,''>) {
    const entity = new FacebookAdsEntity(
      payload.productId,
      payload.date,
      payload.view,
      payload.click,
      payload.adSpends
    );
    await validate(entity);
    return entity;
  }

  public get productId(): string {
    return this._productId;
  }

  public get date(): Date {
    return this._date;
  }

  public get view(): number {
    return this._view;
  }

  public get click(): number {
    return this._click;
  }

  public get adSpends(): number {
    return this._adSpends;
  }
}
