import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCommentDto: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({
      data: createCommentDto
    })
  }

  async findAll() {
    return this.prisma.comment.findMany({})
  }

  async findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: {id}
    })
  }

  async update(id: number, updateCommentDto: Prisma.CommentUpdateInput) {
    return this.prisma.comment.update({
      where: {id},
      data: updateCommentDto
    })
  }

  remove(id: number) {
    return this.prisma.comment.delete({
      where: {id}
    })
  }
}
