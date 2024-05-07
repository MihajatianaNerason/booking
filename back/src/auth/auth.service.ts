import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserInput } from 'src/user/user.model';
import { LoginInput, UserLogin } from './dto/login';
import { compareSync, hashSync } from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async createUser(user: UserInput): Promise<UserLogin> {
    const { password, email, phone } = user;
    const hashpasswd = hashSync(password, 10);

    const existUser = await this.prismaService
      .$queryRaw<User>`SELECT * FROM USER WHERE email=${email} OR phone=${phone};`;

    if (existUser) throw new Error('Cet utilisateur existe déjà');
    const newUser = await this.prismaService.user.create({
      data: { ...user, password: hashpasswd },
    });

    const token = this.jwtService.sign(user);

    const userloging: UserLogin = {
      id: newUser.id,
      role: newUser.role,
      username: newUser.username,
      token,
    };

    return userloging;
  }

  async login(login: LoginInput): Promise<UserLogin> {
    const { email, password } = login;
    if (!email || !password)
      throw new HttpException(
        "l'email et le mot de passe sont requis",
        HttpStatus.BAD_REQUEST,
      );

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user)
      throw new ForbiddenException(
        "L'email que vous avez entré ne correspond à aucun compte",
      );

    const isValid = compareSync(password, user.password);
    if (!isValid)
      throw new ForbiddenException(
        'Le mot de passe que vous avez entré est incorrect',
      );

    const token = this.jwtService.sign(user);

    const userloging: UserLogin = {
      id: user.id,
      role: user.role,
      token,
      username: user.username,
    };

    return userloging;
  }
}
