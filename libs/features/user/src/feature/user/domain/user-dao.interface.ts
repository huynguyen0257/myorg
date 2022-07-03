import { UserDTO } from "./user.dto";

export interface IUserDAO {
  create(payload: Omit<Partial<UserDTO>, 'roles'>): Promise<Omit<UserDTO, 'roles'>>;
}
