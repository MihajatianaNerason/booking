import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/decorators/public';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Public()
@ApiTags('reservation services')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiOperation({ summary: 'create new Reservation' })
  create(@Body() createReservationDto: Prisma.ReservationCreateInput) {
    return this.reservationService.create(createReservationDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all reservation' })
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get reservation by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update reservation by id' })
  @ApiBody({ description: 'data needed to update reservation' })
  @ApiParam({ name: 'id', type: String, required: true })
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: Prisma.ReservationUpdateInput,
  ) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete reservation by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
