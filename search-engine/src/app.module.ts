import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ProductModule,
    ApiModule,
  ],
  providers: [AppService],
})
export class AppModule { }
