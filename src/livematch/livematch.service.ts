import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LivematchService {
  private readonly FOOTAPI_URL = process.env.FOOTAPI_URL;
  private readonly FOOTAPI_KEY = process.env.FOOTAPI_KEY;

  constructor(private readonly httpService: HttpService) {}
  async getLiveMatch(): Promise<any> {
    const url = `https://${this.FOOTAPI_URL}/api/matches/live`;
    const config = {
      headers: {
        'X-RapidAPI-Key': `${this.FOOTAPI_KEY}`,
        'X-RapidAPI-Host': `${this.FOOTAPI_URL}`,
      },
    };
    const response = await lastValueFrom(this.httpService.get(url, config));
    return response.data;
  }
}
