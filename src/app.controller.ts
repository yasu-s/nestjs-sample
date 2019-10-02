import { Controller, Get, HttpService, Param, Res } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

import { AppService } from './app.service';
import { HogeDto } from './dto';

@ApiUseTags('sample')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly httpService: HttpService) {}

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

  @Get('hoge-file')
  async file(@Res() res: Response) {
    const fileRes = await this.httpService.get('http://localhost:3000/sample.pdf', { responseType: 'arraybuffer' }).toPromise();
    res.attachment('hoge.pdf');
    res.send(fileRes.data);
  }
}
