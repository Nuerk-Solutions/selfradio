import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Playlist, PlaylistSchema } from "./schemas/playlist.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Playlist.name, schema: PlaylistSchema }]),
  ],
  providers: [PlaylistsService],
  controllers: [PlaylistsController]
})
export class PlaylistsModule {}
