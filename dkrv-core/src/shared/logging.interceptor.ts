import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext , next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const now = Date.now();
    if (req) {
      const method = req.method;
      const url = req.url;

      return next.handle().pipe(
        tap(() => Logger.log(`${method} ${url} ${Date.now() - now}`, context.getClass().name)),
      );
    } else {
      const ctx = GqlExecutionContext.create(context);
      const resolverName = ctx.getContext().name;
      const info = ctx.getInfo();

      return next.handle().pipe(
        tap(() => Logger.log(`${info.parentType} ${info.fieldName} ${Date.now() - now}`, resolverName)),
      );
    }
  }
}
