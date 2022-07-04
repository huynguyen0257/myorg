import { BadRequestException, Inject, Injectable, Scope } from '@nestjs/common';
import { UserModuleInject } from '../../../../../config';
import { IUseCase } from '../../../../../core';
import { IUserRepository, UserDTO, UserEntity } from '../../../domain';

export type CreateUserUCType = Partial<UserDTO> & Required<Pick<UserDTO, 'username' | 'email' | 'password'>>

@Injectable({scope: Scope.DEFAULT})
export class CreateUserUseCase implements IUseCase<CreateUserUCType, UserDTO> {
  constructor(
    @Inject(UserModuleInject.USER_REPO)
    private readonly _repo: IUserRepository
  ) {
  }
  async execute(request?: CreateUserUCType): Promise<UserDTO> {
    const dto = await this._repo.getAll({
      usernames: [request.username],
      emails: [request.email]
    })
    if (dto.length > 0) {
      throw new BadRequestException(undefined, 'Username or email already exist');
    }
    const entity = UserEntity.create(request);
    return this._repo.create(entity);
  }
}
