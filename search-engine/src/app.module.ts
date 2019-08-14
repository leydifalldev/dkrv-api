import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PlaceModule } from './place/place.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ProductModule,
    PlaceModule,
  ],
  providers: [AppService],
})
export class AppModule { }
