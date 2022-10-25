import { Controller, Get } from '@nestjs/common';
import { LivematchService } from './livematch.service';

@Controller('livematch')
export class LivematchController {
  constructor(private readonly livematchService: LivematchService) {}
  @Get()
  getLiveMatch() {
    return this.livematchService.getLiveMatch();
  }
}
