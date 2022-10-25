import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { LivematchModule } from './livematch/livematch.module';
import { MatchModule } from './match/match.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    LivematchModule,
    MatchModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
