import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { HogeDto } from './dto';

@ApiUseTags('sample')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hoge/:id')
  @ApiResponse({ status: 200, type: HogeDto })
  findOne(@Param('id') id: string): HogeDto {
    return {
      id,
      name: 'aaa',
    } as HogeDto;
  }
}
