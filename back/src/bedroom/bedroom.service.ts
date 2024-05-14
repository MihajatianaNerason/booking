import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BedroomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBedroomDto: Prisma.BedroomCreateInput) {
    return this.prisma.bedroom.create({
      data: createBedroomDto,
    });
  }

  async findAll() {
    return this.prisma.bedroom.findMany({});
  }

  async findOne(id: number) {
    return this.prisma.bedroom.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBedroomDto: Prisma.BedroomUpdateInput) {
    return this.prisma.bedroom.update({
      where: {
        id,
      },
      data: updateBedroomDto,
    });
  }

  async remove(id: number) {
    return this.prisma.bedroom.delete({
      where: {
        id,
      },
    });
  }
}
