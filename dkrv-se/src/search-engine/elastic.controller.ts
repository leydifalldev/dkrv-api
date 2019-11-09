import { Controller, Get } from '@nestjs/common';

@Controller()
export class SearchEngineController {
  @Get()
  getHello(): string {
    return 'Hello';
  }
}
