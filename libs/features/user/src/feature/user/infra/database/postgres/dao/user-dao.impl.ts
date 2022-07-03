import { IUserDAO } from "../../../../domain/user-dao.interface";
import { UserDTO } from "../../../../domain/user.dto";

// TODO: Implement
export class UserDaoImpl implements IUserDAO {
  create(payload: Omit<Partial<UserDTO>, "roles">): Promise<Omit<UserDTO, "roles">> {
    throw new Error("Method not implemented.");
  }

}
