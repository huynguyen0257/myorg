import { Type } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class ViewUserDTO {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  @Type(() => Date)
  dob: Date;

  @IsDate()
  @Type(() => Array)
  roles: string[]
}

export class CreateUserInputDTO {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsDate()
  @IsOptional()
  dob: Date;
}

export class UpdateUserInputDTO extends PartialType(CreateUserInputDTO) {}
