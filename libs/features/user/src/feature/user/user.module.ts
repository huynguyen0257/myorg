import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModuleInject } from '../../config';
import { CreateUserUseCase } from './app';
import { UserController } from './controller';
import { UserRepositoryImpl, UserTable } from './infra';

@Module({
  controllers: [UserController],
  providers: [{
    provide: UserModuleInject.USER_REPO,
    useClass: UserRepositoryImpl
  },{
    provide: UserModuleInject.CREATE_USER_USECASE,
    useClass: CreateUserUseCase
  }],
  exports: [],
  imports: [TypeOrmModule.forFeature([UserTable])]
})
export class UserModule {}
