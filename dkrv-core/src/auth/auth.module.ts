import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [AuthService],
})
export class AuthModule {}
