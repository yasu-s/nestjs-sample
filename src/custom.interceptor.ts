import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Response } from 'express';
import { NEVER, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: ArrayBuffer) => {
        const res = context.switchToHttp().getResponse<Response>();
        res.attachment('sample.pdf');
        res.send(data);
      }),
    );
  }
}
