import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { algorithm: 'HS256' },
    }),
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    AuthService,
    PrismaService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
