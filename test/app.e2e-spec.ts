import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/valid search with movie matrix (GET)', () => {
    return request(app.getHttpServer())
      .get('/omdb?keyword=matrix ')
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual({
          Search: [
            {
              Title: 'The Matrix',
              Year: '1999',
              imdbID: 'tt0133093',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix Reloaded',
              Year: '2003',
              imdbID: 'tt0234215',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix Revolutions',
              Year: '2003',
              imdbID: 'tt0242653',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix Revisited',
              Year: '2001',
              imdbID: 'tt0295432',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg',
            },
            {
              Title: 'Enter the Matrix',
              Year: '2003',
              imdbID: 'tt0277828',
              Type: 'game',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix: Path of Neo',
              Year: '2005',
              imdbID: 'tt0451118',
              Type: 'game',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg',
            },
            {
              Title: 'A Glitch in the Matrix',
              Year: '2021',
              imdbID: 'tt9847360',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
            },
            {
              Title: 'Armitage III: Dual Matrix',
              Year: '2002',
              imdbID: 'tt0303678',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg',
            },
            {
              Title: 'CR: Enter the Matrix',
              Year: '2009',
              imdbID: 'tt1675286',
              Type: 'game',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg',
            },
            {
              Title: 'Sex and the Matrix',
              Year: '2000',
              imdbID: 'tt0274085',
              Type: 'movie',
              Poster: 'N/A',
            },
            {
              Title: "Making 'The Matrix'",
              Year: '1999',
              imdbID: 'tt0365467',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BZjJjMTg5MTEtMDkwMy00ZjUyLTg5ODYtMmNmY2ZiNGVlZTdjXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg',
            },
            {
              Title: 'Buhera mátrix',
              Year: '2007',
              imdbID: 'tt0970173',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMGZiNzdmYWUtZTY0ZS00ZGU4LWE1NDgtNTNkZWM3MzQ0NDY4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjIzMDAwOTc@._V1_SX300.jpg',
            },
            {
              Title: 'Return to Source: Philosophy & The Matrix',
              Year: '2004',
              imdbID: 'tt0439783',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BODJjOTEyYTAtMGYwMC00ZDc5LTg5ZGItMGJmNzM4MjUzM2Q5XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix Online',
              Year: '2005',
              imdbID: 'tt0390244',
              Type: 'game',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTYxNTM5MDkwMF5BMl5BanBnXkFtZTcwMTAzMTEzMQ@@._V1_SX300.jpg',
            },
            {
              Title: 'The Matrix Recalibrated',
              Year: '2004',
              imdbID: 'tt0410519',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BODE1NWM0NmYtMmM1Ny00OTg3LWE3YWUtOTJhMzVkNWEzOGI0XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg',
            },
            {
              Title: 'Threat Matrix',
              Year: '2003–2004',
              imdbID: 'tt0364888',
              Type: 'series',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTdlYjcwMmEtMjUxMi00NDg4LTg0YjUtZjAxZGVhYWVjMTFjXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_SX300.jpg',
            },
            {
              Title: 'Sex Files: Sexual Matrix',
              Year: '2000',
              imdbID: 'tt0224086',
              Type: 'movie',
              Poster: 'N/A',
            },
            {
              Title: 'The Living Matrix',
              Year: '2009',
              imdbID: 'tt1499960',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMjAwNTU2NzExMV5BMl5BanBnXkFtZTgwNzI4Mzg2MTE@._V1_SX300.jpg',
            },
            {
              Title: 'Matrix',
              Year: '1993',
              imdbID: 'tt0106062',
              Type: 'series',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg',
            },
            {
              Title: 'V-World Matrix',
              Year: '1999',
              imdbID: 'tt0211096',
              Type: 'movie',
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMDI4ZGU1OWYtYTNjMy00YWQ4LTg3M2YtNmUxMDhiZjFhZTYwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjc4MjYzOA@@._V1_SX300.jpg',
            },
          ],
          totalResults: '114',
          Response: 'True',
        });
      });
  });

  it('/validate param as missing (GET)', () => {
    return request(app.getHttpServer())
      .get('/omdb')
      .expect(400)
      .then((result) => {
        expect(result.statusCode).toEqual(400);
      });
  });

  it('/validate movie found Response  (GET)', () => {
    return request(app.getHttpServer())
      .get('/omdb')
      .query({
        keyword: 'sully',
      })
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.body.Response).toEqual('True');
      });
  });

  it('/validate Movie Not Found (GET)', () => {
    return request(app.getHttpServer())
      .get('/omdb')
      .query({
        keyword: 'sully987',
      })
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.body.Error).toEqual('Movie not found!');
        expect(result.body.Response).toEqual('False');
      });
  });
});
