import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { HogeDto } from './dto';

@ApiTags('sample')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * 1件データ取得
   * @param id ID
   */
  @Get('hoge/:id')
  @ApiResponse({ status: 200, type: HogeDto })
  findOne(@Param('id') id: string): HogeDto {
    return {
      id,
      name: 'aaa',
    } as HogeDto;
  }
}
