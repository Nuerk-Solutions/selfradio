import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { MusicController } from "./music.controller";
import { MusicService } from './music.service';
import {Song, SongSchema} from "./schemas/song.schema";
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
      MulterModule.register({
          dest: './upload',
      })
  ],
  controllers: [MusicController],
  providers: [MusicService]
})
export class MusicModule {}
