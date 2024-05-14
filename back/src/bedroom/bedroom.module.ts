import { Module } from '@nestjs/common';
import { BedroomService } from './bedroom.service';
import { BedroomController } from './bedroom.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BedroomController],
  providers: [BedroomService, PrismaService],
})
export class BedroomModule {}
