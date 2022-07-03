import { Exclude, Expose, Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { randomUUID } from 'crypto';

export type UserPros = {
  id: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: Date;
};

export class UserEntity {
  @Exclude()
  @IsString()
  private _id: string;

  @Expose()
  @IsString()
  private _username: string;

  @Expose()
  @IsString()
  private _password: string;

  @Expose()
  @IsString()
  private _firstName?: string;

  @Expose()
  @IsString()
  private _lastName?: string;

  @Expose()
  @IsDate()
  private _dob?: Date;

  private constructor(payload: UserPros) {
    this._id = payload.id;
    this._username = payload.username;
    this._password = payload.password;
    this._firstName = payload.firstName;
    this._lastName = payload.lastName;
    this._dob = payload.dob;
  }

  @Expose()
  public get id(): string {
    return this._id;
  }

  @Expose()
  public get username(): string {
    return this._username;
  }

  @Expose()
  public get password(): string {
    return this._password;
  }

  @Expose()
  public get firstName(): string | undefined {
    return this._firstName;
  }

  @Expose()
  public get lastName(): string | undefined {
    return this._lastName;
  }

  @Expose()
  @Type(() => Date)
  public get dob(): Date | undefined {
    return this._dob;
  }

  public static create(payload: Partial<UserPros>) {
    if (!payload.username || !payload.password) {
      throw new Error('UserEntity create error: !payload.username || !payload.password')
    }

    return new UserEntity({
      ...payload,
      id : payload.id || randomUUID(),
      username: payload.username,
      password: payload.password,
    })
  }
}
