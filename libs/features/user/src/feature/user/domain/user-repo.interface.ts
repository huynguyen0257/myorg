import { IRepository } from '../../../core';
import { UserDTO } from './user.dto';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserRepository extends IRepository<UserDTO> {}
