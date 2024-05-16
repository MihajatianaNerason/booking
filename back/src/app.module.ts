import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';
import { BedroomModule } from './bedroom/bedroom.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UserModule, AuthModule, BedroomModule, ReservationModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
