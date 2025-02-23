import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from '@prisma/client';

@Injectable()
export class StationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createStationDto: CreateStationDto): Promise<Station> {
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
        tags: createStationDto.tags || [],
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

  async findAll(): Promise<Station[]> {
    const stations = await this.prismaService.station.findMany();
    return stations;
  }

  // async findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.StationWhereUniqueInput;
  //   where?: Prisma.StationWhereInput;
  //   orderBy?: Prisma.StationOrderByWithRelationInput;
  // }): Promise<Station[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prismaService.station.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async findOne(id: string): Promise<Station | null> {
    return await this.prismaService.station.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateStationDto: UpdateStationDto) {
    return await this.prismaService.station.update({
      where: { id },
      data: updateStationDto,
    });
  }

  async remove(id: string): Promise<Station | null> {
    return await this.prismaService.station.delete({
      where: { id },
    });
  }
}
