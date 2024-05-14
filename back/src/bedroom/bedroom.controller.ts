import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BedroomService } from './bedroom.service';
import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/decorators/public';

@Public()
@Controller('bedroom')
export class BedroomController {
  constructor(private readonly bedroomService: BedroomService) {}

  @Post()
  create(@Body() createBedroomDto: Prisma.BedroomCreateInput) {
    return this.bedroomService.create(createBedroomDto);
  }

  @Get()
  findAll() {
    return this.bedroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bedroomService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBedroomDto: Prisma.BedroomUpdateInput,
  ) {
    return this.bedroomService.update(+id, updateBedroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedroomService.remove(+id);
  }
}
