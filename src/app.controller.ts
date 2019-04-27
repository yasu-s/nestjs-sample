import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { HogeDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hoge/:id')
  findOne(@Param('id') id: string): HogeDto {
    return {
      id,
      name: 'aaa',
    } as HogeDto;
  }
}
