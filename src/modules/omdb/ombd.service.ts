import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable } from 'rxjs';
import { IOmdb } from 'src/interfaces/omdb/IOmdb';

@Injectable()
export class OmbdService {
  logger = new Logger();

  constructor(private httpService: HttpService) {}

  findByKeyword(keyword: string, page = 1): Observable<IOmdb> {
    this.logger.debug(
      `***Data loaded from service keyword=${keyword}., during next 10 sec will be from cash, TimeNow=${new Date()}`,
    );
    return this.httpService
      .get(process.env.OMDB_URL, {
        params: {
          apikey: process.env.OMDB_API_KEY,
          i: process.env.OMDB_I,
          s: keyword,
          page: page,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }
}
