import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';

@Injectable()
export class MatchService {
  private readonly FOOTAPI_URL = process.env.FOOTAPI_URL;
  private readonly FOOTAPI_KEY = process.env.FOOTAPI_KEY;

  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  @Cron(CronExpression.EVERY_6_HOURS)
  async handleCron() {
    const url = `https://footapi7.p.rapidapi.com/api/tournament/325/season/40557/matches/last/0`;
    const config = {
      headers: {
        'X-RapidAPI-Key': `${this.FOOTAPI_KEY}`,
        'X-RapidAPI-Host': `${this.FOOTAPI_URL}`,
      },
    };
    const response = await lastValueFrom(this.httpService.get(url, config));
    const data: CreateMatchDto = response.data.events;
    await this.prisma.public_match.createMany({ data, skipDuplicates: true });
  }

  async getMatch(page: number): Promise<any> {
    const url = `https://footapi7.p.rapidapi.com/api/tournament/325/season/40557/matches/last/${page}`;
    const config = {
      headers: {
        'X-RapidAPI-Key': `${this.FOOTAPI_KEY}`,
        'X-RapidAPI-Host': `${this.FOOTAPI_URL}`,
      },
    };
    const response = await lastValueFrom(this.httpService.get(url, config));
    const data: CreateMatchDto = response.data.events;
    await this.prisma.public_match.createMany({ data, skipDuplicates: true });
  }

  create(data) {
    return this.prisma.public_match.create({ data });
  }

  findAll() {
    return this.prisma.public_match.findMany();
  }
}
