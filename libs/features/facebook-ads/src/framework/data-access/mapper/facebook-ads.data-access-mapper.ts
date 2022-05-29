import { FacebookAdsEntity } from '../../../domain';
import { FacebookAdsEntityTable } from '../entities';

export class FacebookAdsDataAccessMapper {
  /**
   * mapFrom
   */
  public async mapFrom(
    entity: FacebookAdsEntity
  ): Promise<FacebookAdsEntityTable> {
    return FacebookAdsEntityTable.create({
      productId: entity.productId,
      date: entity.date,
      view: entity.view,
      click: entity.click,
      adSpends: entity.adSpends,
    });
  }

  /**
   * mapTo
   */
  public async mapTo(
    table: FacebookAdsEntityTable
  ): Promise<FacebookAdsEntity> {
    return FacebookAdsEntity.create({
      productId: table.productId,
      date: table.date,
      view: table.view,
      click: table.click,
      adSpends: table.adSpends,
    });
  }
}
