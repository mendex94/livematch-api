import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  imports: [HttpModule],
  controllers: [MatchController],
  providers: [MatchService, PrismaService],
})
export class MatchModule {}
