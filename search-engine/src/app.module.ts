import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ProductModule,
  ],
  providers: [AppService],
})
export class AppModule { }
