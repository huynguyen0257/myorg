import { Body, Controller, Inject, Logger, Post, UseInterceptors } from '@nestjs/common';
import { UserModuleInject } from '../../../../config';
import { IUseCase } from '../../../../core';
import { CreateUserUseCase } from '../../app';
import { CreateUserInputDTO, ViewUserDTO } from './dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserModuleInject.CREATE_USER_USECASE)
    private readonly _useCase: CreateUserUseCase
  ) {}

  @Post()
  public async create(@Body() model: CreateUserInputDTO): Promise<ViewUserDTO> {
    Logger.log(`receive payload: ${JSON.stringify(model)}`)
    // return;
    return this._useCase.execute(model);
  }
}
