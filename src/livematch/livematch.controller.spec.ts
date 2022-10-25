import { Test, TestingModule } from '@nestjs/testing';
import { LivematchController } from './livematch.controller';
import { LivematchService } from './livematch.service';

describe('LivematchController', () => {
  let controller: LivematchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivematchController],
      providers: [LivematchService],
    }).compile();

    controller = module.get<LivematchController>(LivematchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
