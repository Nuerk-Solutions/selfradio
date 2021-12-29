import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Two files are defined below, for the configuration of the app in different environments
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
