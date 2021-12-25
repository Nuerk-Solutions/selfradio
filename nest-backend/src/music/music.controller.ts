import {Body, Controller, Get, Post} from '@nestjs/common';
import {MusicService} from "./music.service";
import {CreateSongDto} from "./dto/create-song.dto";
import {Song} from "./schemas/song.schema";

@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) {}

    @Post()
    async createSong(@Body() createSongDto: CreateSongDto): Promise<Song> {
        return this.musicService.create(createSongDto.title, createSongDto.interpret)
    }

    @Get()
    async getAllSongs(): Promise<Song[]> {
        return this.musicService.findAll()
    }
}
