import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/selfradio'),
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
