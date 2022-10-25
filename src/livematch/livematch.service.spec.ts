import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { LivematchService } from './livematch.service';

describe('LivematchService', () => {
  let service: LivematchService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LivematchService,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<LivematchService>(LivematchService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
  });
  describe('getLiveMatch', () => {
    it('should return a live match', async () => {});
  });
});
