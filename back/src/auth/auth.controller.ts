import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, UserLogin } from './dto/login';
import { Public } from './decorators/public';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserInput } from 'src/user/user.model';
@Public()
@Controller('auth')
@ApiTags('Authentication management')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  @ApiOperation({ summary: 'signup for new user' })
  @ApiBody({
    description: 'the body need for creating new user',
    type: UserInput,
  })
  @ApiResponse({ type: UserLogin, description: 'response of signup' })
  async signup(@Body() body: UserInput) {
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
  @ApiOperation({ summary: 'signin for existing user ' })
  @ApiBody({ description: 'the data needed for loging', type: LoginInput })
  @ApiResponse({
    type: UserLogin,
    description: 'response of login',
    status: 200,
  })
  @ApiResponse({ status: 400, description: 'password or email not provided' })
  async login(@Body() body: LoginInput) {
    const user = await this.authService.login(body);
    return user;
  }
}
