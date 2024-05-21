import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';




@Injectable()
export class NoteService {
  constructor(private readonly data: PrismaService) {}
async  create(createNoteDto: Prisma.NoteCreateInput) {
    return this.data.note.create({
      data:createNoteDto
    })
  }

async  findAll() {
    return this.data.note.findMany({})
  }

async  findOne(id: number) {
    return this.data.note.findUnique({
      where:{id}
    })
  }

async  update(id: number, updateNoteDto: Prisma.NoteUpdateInput) {
    return this.data.note.update({
      where:{id},
      data: updateNoteDto
    })
  }

async  remove(id: number) {
    return this.data.note.delete({
      where:{id}
    })
  }
}
