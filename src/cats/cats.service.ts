import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CatsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getCats(limit: string): Promise<any> {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
    const apiKey = this.configService.get<string>('CAT_API_KEY');
    const response$ = this.httpService.get(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    });
    const response = await lastValueFrom(response$);
    return response.data;
  }
}
