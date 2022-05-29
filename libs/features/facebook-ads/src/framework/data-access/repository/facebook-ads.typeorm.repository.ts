import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FacebookAdsEntity, IFacebookAdsRepository } from "../../../domain";
import { FacebookAdsEntityTable } from "../entities";
import { FacebookAdsDataAccessMapper } from "../mapper";

@Injectable({
  scope: Scope.TRANSIENT,
})
export class FacebookAdsTypeOrmRepository implements IFacebookAdsRepository {
  private readonly _mapper = new FacebookAdsDataAccessMapper();

  constructor(
    @InjectRepository(FacebookAdsEntityTable)
    private readonly _repo: Repository<FacebookAdsEntityTable>
  ) {}

  public async getById(id: string): Promise<FacebookAdsEntity> {
    const table = await this._repo.findOne(id);
    return this._mapper.mapTo(table);
  }
  public async getAll(): Promise<FacebookAdsEntity[]> {
    const mapper = new FacebookAdsDataAccessMapper();
    const tables = await this._repo.find();
    return Promise.all(tables.map(async _ => mapper.mapTo(_)));
  }
  public async create(entity: FacebookAdsEntity): Promise<FacebookAdsEntity> {
    const table = await this._mapper.mapTo(entity);
    return await this._repo.save(table);
  }
  public async update(id: string, entity: FacebookAdsEntity): Promise<FacebookAdsEntity> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<FacebookAdsEntity> {
    throw new Error('Method not implemented.');
  }
}
