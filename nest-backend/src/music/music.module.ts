import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { Song, SongSchema } from './schemas/song.schema';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from './grid-fs-multer-config.service';
import { SingleUploadMiddleware } from "./middleware/single-upload.middleware";
import {MultipleUploadsMiddleware} from "./middleware/multiple-uploads.middleware";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [MusicController],
  providers: [MusicService, GridFsMulterConfigService],
})
export class MusicModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(SingleUploadMiddleware)
        .forRoutes('file');
    consumer
        .apply(MultipleUploadsMiddleware)
        .forRoutes('files')
  }
}
