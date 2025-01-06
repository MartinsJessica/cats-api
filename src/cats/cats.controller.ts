import { Controller, Get, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats(@Query('limit') limit: string = '1') {
    return this.catsService.getCats(limit);
  }
}
