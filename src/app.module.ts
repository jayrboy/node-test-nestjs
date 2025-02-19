import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { StationModule } from './station/station.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    StationModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
