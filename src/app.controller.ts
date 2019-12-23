import { Controller, Get, Param } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { HogeDto } from './dto';

@ApiUseTags('sample')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly moduleRef: ModuleRef) {}

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

  @Get('env')
  async getEnv(): Promise<string> {
    await this.sleep(1000000);
    return process.env.HOGE;
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  @Get('hoge2')
  getHello2(): string {
    const service = this.moduleRef.get(AppService);
    return service.getHello();
  }

  @Get('hoge3')
  getHello3(): string {
    const service = this.moduleRef.get('TEST_SERVICE');
    return service.getHello();
  }

  @Get('num')
  getNum(): string {
    const num = this.appService.getNum();
    console.log(num);
    return num.toString();
  }

  @Get('data')
  async getData() {
    return this.appService.getData();
  }

  @Get('data2')
  async getData2() {
    return this.appService.getData2();
  }
}
