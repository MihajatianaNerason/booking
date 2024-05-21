import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class UserInput {
  @ApiProperty({ name: 'email', type: String })
  email: string;
  @ApiProperty({ name: 'password', type: String })
  password: string;
  @ApiProperty({ name: 'phone', type: String })
  phone: string;
  @ApiProperty({ name: "username", type: String })
  username: string;
  @ApiProperty({ name: "photo", type: String })
  photo: string;
  @ApiProperty({ name: "role", examples: ["ADMIN", "SUPERADMIN", "CLIENT"] })
  role: $Enums.Role;
}
