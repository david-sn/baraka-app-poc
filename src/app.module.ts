import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmdbModule } from './modules/omdb/omdb.module';

@Module({
  imports: [ConfigModule.forRoot(), OmdbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
