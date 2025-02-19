import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private readonly prismaService: PrismaService) {}
  findAll() {
    return `This action returns all station`;
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  create(createStationDto: CreateStationDto) {
    return 'This action get all station';
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
