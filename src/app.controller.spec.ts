import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('findOne', () => {
    it('get ok"', () => {
      // exercise
      const data = appController.findOne('1');

      // verify
      expect(data).toBeDefined();
      expect(data.id).toBe('1');
      expect(data.name).toBe('aaa');
    });
  });
});
