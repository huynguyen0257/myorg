import { IRepository } from '../../../core';
import { IUserDAO } from './user-dao.interface';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

/**
 * Domain Business go here.
 * Invoke Entity for business logic detail
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserRepository extends IRepository<UserDTO> {}

export class UserRepositoryImpl implements IUserRepository {
  constructor(private _dao: IUserDAO) {}

  getAll(): Promise<UserDTO[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  create(payload: Partial<UserDTO>): Promise<UserDTO> {
    if (!payload.username || !payload.password) {
      throw new Error('Missing username or password.');
    }
    const entity = UserEntity.create(payload);
    this._dao.create({
      id: entity.id,
      username: entity.username,
      password: entity.password,
      firstName: entity.firstName,
      lastName: entity.lastName,
      dob: entity.dob,
    })
    throw new Error('Method not implemented.');
  }
  createBulk(payloads: Partial<UserDTO>[]): Promise<boolean> {
    payloads.forEach((payload) => {
      if (!payload.username || !payload.password) {
        throw new Error('Missing username or password.');
      }
    });
    throw new Error('Method not implemented.');
  }
  update(payload: Partial<UserDTO>): Promise<UserDTO> {
    if (!payload.id) {
      throw new Error('Missing id.');
    }
    throw new Error('Method not implemented.');
  }
  updateBulk(payloads: Partial<UserDTO>[]): Promise<boolean> {
    payloads.forEach((payload) => {
      if (!payload.id) {
        throw new Error('Missing id.');
      }
    });
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  deleteBulk(ids: string[]): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
