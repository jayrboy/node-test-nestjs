import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from '@prisma/client';

@Injectable()
export class StationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createStationDto: CreateStationDto): Promise<Station> {
    console.log(createStationDto);
    return await this.prismaService.station.create({
      data: {
        name: createStationDto.name,
        code: createStationDto.code,
        stationCatalogId: createStationDto.stationCatalogId,
        address: createStationDto.address,
        phone: createStationDto.phone,
        latitude: createStationDto.latitude,
        longitude: createStationDto.longitude,
        pictures: createStationDto.pictures || [],
        bankFrHeight: createStationDto.bankFrHeight,
        bankFlHeight: createStationDto.bankFlHeight,
        bankBrHeight: createStationDto.bankBrHeight,
        bankBlHeight: createStationDto.bankBlHeight,
        bankRHeight: createStationDto.bankRHeight,
        bankLHeight: createStationDto.bankLHeight,
        thresholds: createStationDto.thresholds || [],
        floatingSwitchLevel: createStationDto.floatingSwitchLevel,
        status: createStationDto.status || 'ACTIVE',
        layoutPicture: createStationDto.layoutPicture,
        tags: createStationDto.tags,
        info: createStationDto.info || [],
        createdBy: createStationDto.createdBy || 'SYSTEM',
        updatedBy: createStationDto.updatedBy || 'SYSTEM',
        extStationId: createStationDto.extStationId,
        extStationCode: createStationDto.extStationCode,
        basinName: createStationDto.basinName,
        subBasinName: createStationDto.subBasinName,
        river: createStationDto.river,
        amphurName: createStationDto.amphurName,
        tambonName: createStationDto.tambonName,
        provinceName: createStationDto.provinceName,
        sourceGroup: createStationDto.sourceGroup,
        stationMetaCode: createStationDto.stationMetaCode,
        ownerName: createStationDto.ownerName,
        projectName: createStationDto.projectName,
        aliasCode: createStationDto.aliasCode,
      },
    });
  }

  findAll() {
    return `This action returns all station`;
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    const data = updateStationDto;
    return `This action updates ${data} a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
