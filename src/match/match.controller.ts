import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @Get('/matches/:page')
  getMatch(@Param('page') page: number) {
    return this.matchService.getMatch(page);
  }
}
