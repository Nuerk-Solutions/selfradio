import {Body, Controller, Get, Logger, Post, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {MusicService} from "./music.service";
import {CreateSongDto} from "./dto/create-song.dto";
import {Song} from "./schemas/song.schema";
import {ApiConsumes} from "@nestjs/swagger";
import {ApiImplicitFile} from "@nestjs/swagger/dist/decorators/api-implicit-file.decorator";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {AppController} from "../app.controller";

@Controller('music')
export class MusicController {
    private readonly logger = new Logger(AppController.name);

    constructor(private readonly musicService: MusicService) {}

    @Post("file")
    @UseInterceptors(FileInterceptor('file'))
    async uploadSong(@UploadedFile() file: Express.Multer.File): Promise<Song> {
        let metadata = file.originalname.split(" - ", 2);
        return this.musicService.createSong(metadata[1].substring(0, metadata[1].length - 4), metadata[0], file.path)
    }

    @Post("files")
    @UseInterceptors(FilesInterceptor('files'))
    async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        files.forEach(file => {
            let metadata = file.originalname.split(" - ", 2);
            this.musicService.createSong(metadata[1].substring(0, metadata[1].length - 4), metadata[0], file.path)
        })
    }

    @Get()
    async getAllSongs(): Promise<Song[]> {
        return this.musicService.findAll()
    }
}
