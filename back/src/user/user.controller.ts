import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('signup')
  async signup(@Body() body: any) {
    try {
      const user = await this.userService.createUser(body);
      return user;
    } catch (error) {
      throw new HttpException(
        "l'utilisteur existe déjà",
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
