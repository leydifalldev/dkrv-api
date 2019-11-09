import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { SearchEngineModule } from './search-engine/search-engine.module';

@Module({
  imports: [ApiModule, SearchEngineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
