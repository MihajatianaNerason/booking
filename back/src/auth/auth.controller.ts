import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login';
import { Public } from './public';
@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  async signup(@Body() body: any) {
    try {
      const user = await this.authService.createUser(body);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  @Post('/signin')
  async login(@Body() body: LoginInput) {
    const user = await this.authService.login(body);
    return user;
  }
}
