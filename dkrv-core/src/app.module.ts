import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { MongooseConfigService } from './services';

@Module({
  imports: [
    ApiModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
