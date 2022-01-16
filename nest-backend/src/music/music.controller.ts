import {Controller, Get, Post, Put, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { MusicService } from './music.service';
import { Song } from './schemas/song.schema';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) {}

  @Put('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSong(@UploadedFile() file: Express.Multer.File): Promise<Song> {
    const metadata = file.originalname.split(' - ', 2);
    return this.musicService.createSong(
      metadata[1].substring(0, metadata[1].length - 4),
      metadata[0],
      file.path,
    );
  }

  @Put('files')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    files.forEach((file) => {
      const metadata = file.originalname.split(' - ', 2);
      this.musicService.createSong(
        metadata[1].substring(0, metadata[1].length - 4),
        metadata[0],
        file.path,
      );
    });
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
