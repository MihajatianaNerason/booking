import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BedroomModule } from './bedroom/bedroom.module';

@Module({
  imports: [UserModule, AuthModule, BedroomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
