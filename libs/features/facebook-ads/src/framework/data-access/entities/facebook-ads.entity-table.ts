import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({ name: 'facebook-ads' })
@Unique('primary_key_date_product_id', ['productId', 'date'])
export class FacebookAdsEntityTable {
  @PrimaryColumn({
    name: 'product_id',
    type: 'varchar',
    length: 50,
  })
  productId: string;

  @PrimaryColumn({
    name: 'date',
    type: 'timestamp',
  })
  date: Date;

  @Column({
    name: 'view',
    type: 'int',
  })
  view: number;

  @Column({
    name: 'click',
    type: 'int',
  })
  click: number;

  @Column({
    name: 'ad_spends',
    type: 'int',
  })
  adSpends: number;

  constructor(
    productId: string,
    date: Date,
    view: number,
    click: number,
    adSpends: number
  ) {
    this.productId = productId;
    this.date = date;
    this.view = view;
    this.click = click;
    this.adSpends = adSpends;
  }

  public static create(payload: Omit<FacebookAdsEntityTable, ''>) {
    return new FacebookAdsEntityTable(
      payload.productId,
      payload.date,
      payload.view,
      payload.click,
      payload.adSpends
    );
  }
}
