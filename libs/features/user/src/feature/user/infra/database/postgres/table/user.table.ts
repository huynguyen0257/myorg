import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserTable {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 36,
  })
  id?: string;

  @Column({
    name: 'username',
    type: 'varchar',
    unique: true
  })
  username?: string;

  @Column({
    name: 'email',
    type: 'varchar',
    unique: true
  })
  email?: string;

  @Column({
    name: 'password',
    type: 'varchar',
  })
  password?: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: true
  })
  firstName?: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: true
  })
  lastName?: string;

  @Column({
    name: 'dob',
    type: 'timestamp',
    nullable: true
  })
  dob?: Date;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    password: string,
    dob: Date,
    username: string,
    email: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
		this.dob = dob;
		this.username = username;
		this.email = email;
  }

  public static create(payload: Partial<UserTable>) {
    return new UserTable(
      payload.id,
      payload.firstName,
      payload.lastName,
      payload.password,
      payload.dob,
      payload.username,
      payload.email,
    );
  }
}
