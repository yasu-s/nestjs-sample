import { HttpService, Injectable, Scope } from '@nestjs/common';
import Axios from 'axios';

/**
 * サービスクラス
 */
@Injectable({ scope: Scope.TRANSIENT })
export class AppService {
  private num = 0;

  /**
   * 'Hello World!' 文字列取得
   * @returns 'Hello World!'
   */
  getHello(): string {
    return 'Hello World!';
  }

  getNum(): number {
    return this.num++;
  }

  async getData() {
    const httpService = new HttpService(Axios.create());
    console.log(`${httpService.axiosRef.defaults.timeout}`);
    const res = await httpService.get('http://localhost:3000/').toPromise();
    httpService.axiosRef.defaults.timeout = 100;
    return res.data;
  }
}
