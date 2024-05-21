import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class LoginInput {
  @ApiProperty({
    name: 'email',
    type: String,
    nullable: false,
    required: true,
    description: 'email to login in the app',
  })
  email: string;
  @ApiProperty({
    name: 'password',
    type: String,
    nullable: false,
    required: true,
    minLength: 8,
    description: 'password of user to login',
  })
  password: string;
}

export class UserLogin {
  @ApiProperty({ name: 'id', description: 'id of user' })
  id: number;
  @ApiProperty({
    enum: ['ADMIN', 'SUPERADMIN', 'CLIENT'],
    description: 'role of user',
    name: 'role',
  })
  role: $Enums.Role;
  @ApiProperty({
    name: 'username',
    description: 'username of user',
    nullable: false,
  })
  username: string;
  @ApiProperty({
    name: 'token',
    description: 'token to determine action and role',
  })
  token: string;
}
