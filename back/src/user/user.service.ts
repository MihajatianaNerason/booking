import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { UserInput } from './user.model';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: UserInput): Promise<User | null> {
    const { password } = user;
    const hashpasswd = hashSync(password, 10);

    const newUser = await this.prismaService.user.create({
      data: { ...user, password: hashpasswd },
    });

    return newUser;
  }
}
