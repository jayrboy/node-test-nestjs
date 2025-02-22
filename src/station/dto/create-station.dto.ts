import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsArray,
} from 'class-validator';
import { Status } from '@prisma/client';

export class CreateStationDto {
  @ApiProperty({ example: 'อ.บางระกำ จ.พิษณุโลก', description: 'Station name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'swoc216', description: 'Station code' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    example: '82ebe550-6a14-4d72-8727-36abe9d06c20',
    description: 'Station Catalog ID',
  })
  @IsOptional()
  @IsString()
  stationCatalogId?: string;

  @ApiPropertyOptional({
    example: 'ตำบล บางระกำ อำเภอ บางระกำ จังหวัด พิษณุโลก',
    description: 'Station address',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    example: '0123456789',
    description: 'Station phone number',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    example: 16.759357,
    description: 'Latitude coordinate',
  })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({
    example: 100.117695,
    description: 'Longitude coordinate',
  })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ example: [], description: 'Array of picture URLs' })
  @IsOptional()
  @IsArray()
  pictures?: string[];

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Front Right Height',
  })
  @IsOptional()
  @IsNumber()
  bankFrHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Front Left Height',
  })
  @IsOptional()
  @IsNumber()
  bankFlHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Back Right Height',
  })
  @IsOptional()
  @IsNumber()
  bankBrHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Back Left Height',
  })
  @IsOptional()
  @IsNumber()
  bankBlHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Right Height',
  })
  @IsOptional()
  @IsNumber()
  bankRHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Bank Left Height',
  })
  @IsOptional()
  @IsNumber()
  bankLHeight?: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Thresholds',
  })
  @IsOptional()
  @IsString()
  thresholds?: string[];

  @ApiPropertyOptional({
    example: null,
    description: 'Float Switch Level',
  })
  @IsOptional()
  @IsNumber()
  floatingSwitchLevel?: number;

  @ApiPropertyOptional({
    example: 'INACTIVE',
    enum: Status,
    description: 'Station status',
  })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @ApiPropertyOptional({
    example: '9eef698e6c864e4e88dfa2c09464dc67.jpg',
    description: 'Layout picture URL',
  })
  @IsOptional()
  @IsString()
  layoutPicture?: string;

  @ApiPropertyOptional({
    example: null,
    description: 'Tags',
  })
  @IsOptional()
  @IsString()
  tags?: string[];

  @ApiPropertyOptional({
    example: null,
    description: 'Information',
  })
  @IsOptional()
  @IsString()
  info?: string[];

  @ApiPropertyOptional({ example: 'SYSTEM', description: 'Created by user' })
  @IsOptional()
  @IsString()
  createdBy?: string;

  @ApiPropertyOptional({ example: 'SYSTEM', description: 'Updated by user' })
  @IsOptional()
  @IsString()
  updatedBy?: string;

  @ApiPropertyOptional({ example: '216', description: 'External Station ID' })
  @IsOptional()
  @IsString()
  extStationId?: string;

  @ApiPropertyOptional({
    example: 'TEST000',
    description: 'External Station Code',
  })
  @IsOptional()
  @IsString()
  extStationCode?: string;

  @ApiPropertyOptional({
    example: 'เจ้าพระยา',
    description: 'Basin Name',
  })
  @IsOptional()
  @IsString()
  basinName?: string;

  @ApiPropertyOptional({
    example: null,
    description: 'Sub Basin Name',
  })
  @IsOptional()
  @IsString()
  subBasinName?: string;

  @ApiPropertyOptional({
    example: 'แม่น้ำเจ้าพระยา',
    description: 'River name',
  })
  @IsOptional()
  @IsString()
  river?: string;

  @ApiPropertyOptional({
    example: 'เมือง',
    description: 'Amphur Name',
  })
  @IsOptional()
  @IsString()
  amphurName?: string;

  @ApiPropertyOptional({
    example: 'บ้านกล้วย',
    description: 'ธambon Name',
  })
  @IsOptional()
  @IsString()
  tambonName?: string;

  @ApiPropertyOptional({
    example: 'แม่น้ำเจ้าพระยา',
    description: 'ชัยนาท',
  })
  @IsOptional()
  @IsString()
  provinceName?: string;

  @ApiPropertyOptional({
    example: 'HYDRO',
    description: 'Source Group',
  })
  @IsOptional()
  @IsString()
  sourceGroup?: string;

  @ApiPropertyOptional({
    example: 10,
    description: 'Station Meta Code',
  })
  @IsOptional()
  @IsString()
  stationMetaCode?: string;

  @ApiPropertyOptional({
    example: 'โครงการส่งน้ำและบำรุงรักษาบางบาล',
    description: 'Owner Name',
  })
  @IsOptional()
  @IsString()
  ownerName?: string;

  @ApiPropertyOptional({
    example: 'โครงการส่งน้ำและบำรุงรักษาบางบาล',
    description: 'Project Name',
  })
  @IsOptional()
  @IsString()
  projectName?: string;

  @ApiPropertyOptional({
    example: 'HYDRO-e94c99d9',
    description: 'Alias Code',
  })
  @IsOptional()
  @IsString()
  aliasCode?: string;
}
