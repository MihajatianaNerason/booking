import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteService } from './note.service';
import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/decorators/public';

@Public()
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: Prisma.NoteCreateInput) {
    return this.noteService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: Prisma.NoteUpdateInput) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
