import { $Enums } from '@prisma/client';

export type LoginInput = {
  email: string;
  password: string;
};

export type UserLogin = {
  id: number;
  role: $Enums.Role;
  username: string;
  token: string;
};
