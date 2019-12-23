import { Injectable } from '@nestjs/common';

/**
 * サービスクラス
 */
@Injectable()
export class App2Service {
  /**
   * 'Hello World!' 文字列取得
   * @returns 'Hello World!'
   */
  getHello(): string {
    return 'Hello World!2';
  }
}
