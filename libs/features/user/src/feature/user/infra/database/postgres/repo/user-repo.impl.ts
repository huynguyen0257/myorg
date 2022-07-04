import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { IUserRepository, UserDTO } from '../../../../domain';
import { UserTable } from '../table';

type filter =  {
  usernames?: string[];
  emails?: string[];
}

@Injectable({ scope: Scope.DEFAULT })
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(UserTable)
    private readonly _repo: Repository<UserTable>
  ) {}

  async getAll(filter?:filter): Promise<UserDTO[]> {
    const tables = await this._repo.find({where: [
      {
        username: In(filter.usernames)
      },
      {
        email: In(filter.emails)
      }
    ]});
    return tables.map((table) => ({ ...table } as UserDTO));
  }
  async getById(id: string): Promise<UserDTO> {
    const table = await this._repo.findOne(id);
    return table as UserDTO;
  }
  async create(payload: Partial<UserDTO>): Promise<UserDTO> {
    let table = UserTable.create(payload);
    table = await this._repo.save(table);
    return table as UserDTO;
  }
  async createBulk(payloads: Partial<UserDTO>[]): Promise<boolean> {
    const tables = payloads.map((payload) => UserTable.create(payload));
    const result = await this._repo
      .createQueryBuilder()
      .insert()
      .values([...tables])
      .execute();
    return result.raw.length === payloads.length;
  }
  async update(payload: Partial<UserDTO>): Promise<UserDTO> {
    const result = await this._repo.update(payload.id, {
      ...payload,
      id: undefined,
    });
    return result.raw[0];
  }
  updateBulk(payloads: Partial<UserDTO>[]): Promise<boolean> {
    payloads.forEach((payload) => {
      if (!payload.id) {
        throw new Error('Missing id.');
      }
    });
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<boolean> {
    const result = await this._repo.delete(id);
    return result.affected === 1;
  }
  async deleteBulk(ids: string[]): Promise<boolean> {
    const result = await this._repo.delete(ids);
    return result.affected === ids.length;
  }
}
