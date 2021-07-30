import {
  CacheInterceptor,
  Controller,
  Get,
  HttpException,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { map, zip } from 'rxjs';
import { IOmdb } from 'src/interfaces/omdb/IOmdb';
import { OmbdService } from './ombd.service';

@Controller('omdb')
export class OmdbController {
  constructor(private ombdService: OmbdService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async getTest(@Query('keyword') keyword: string): Promise<any> {
    if (!keyword || keyword === '') {
      throw new HttpException('Invalid Keyword parameter', 400);
    }

    return zip(
      this.ombdService.findByKeyword(keyword, 1),
      this.ombdService.findByKeyword(keyword, 2),
    ).pipe(
      map((x: IOmdb[]) => {
        if (x[1] && x[1].Response === 'True' && x[1].Search)
          return {
            ...x[1],
            Search: [...x[0].Search, ...x[1].Search],
          };
        return x[0];
      }),
    );
  }
}
