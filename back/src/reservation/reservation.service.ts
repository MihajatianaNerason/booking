import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()

export class ReservationService {
  
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservationDto: Prisma.ReservationCreateInput) {
    return this.prisma.reservation.create({data: createReservationDto});
  }

  async findAll() {
    return this.prisma.reservation.findMany({});
  }

  async findOne(id: number) {
    return this.prisma.reservation.findUnique({where:{id}});
  }

  async update(id: number, updateReservationDto: Prisma.ReservationUpdateInput) {
    return this.prisma.reservation.update({where: {id}, data: updateReservationDto});
  }

  async remove(id: number) {
    return this.prisma.reservation.delete({where: {id}});
  }
}
