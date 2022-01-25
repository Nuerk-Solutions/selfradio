import {Controller, Get, HttpCode, Post, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { MusicService } from './music.service';
import { Song } from './schemas/song.schema';

@Controller('music')
export class MusicController {

  constructor(private readonly musicService: MusicService) {}

  @Post('file')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('file', ))
  uploadSong(@UploadedFile() file: Express.Multer.File) {
    return "Upload successful."
  }


  @Post('files')
  @HttpCode(201)
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files) {
    return "Multiple uploads successful."
  }

  @Get("interpret")
  async getSongsFromInterpret(interpret: string): Promise<Song[]> {
    return this.musicService.findByInterpret(interpret);
  }

  @Get("title")
  async getSongsWithTitle(title: string): Promise<Song[]> {
      return this.musicService.findByTitle(title);
  }

  @Get("")
  async getAllSongs(): Promise<Song[]> {
      return this.musicService.findAll()
  }
}
