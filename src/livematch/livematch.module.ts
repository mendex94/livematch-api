import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LivematchController } from './livematch.controller';
import { LivematchService } from './livematch.service';

@Module({
  imports: [HttpModule],
  controllers: [LivematchController],
  providers: [LivematchService],
})
export class LivematchModule {}
