import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { OmbdService } from './ombd.service';
import { OmdbController } from './omdb.controller';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 10,
    }),
  ],
  controllers: [OmdbController],
  providers: [OmbdService],
})
export class OmdbModule {}
