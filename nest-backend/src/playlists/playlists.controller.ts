import {Body, Controller, Get, Post } from '@nestjs/common';
import { Playlist } from "./schemas/playlist.schema";
import { PlaylistsService } from "./playlists.service";
import {CreatePlaylistDto} from "./dto/create-playlist.dto";

@Controller('playlist')
export class PlaylistsController {
    constructor(private readonly playlistService: PlaylistsService) {}

    @Post("create")
    async createPlaylist(@Body() createPlaylistDTO: CreatePlaylistDto): Promise<Playlist> {
        return this.playlistService.createPlaylist(createPlaylistDTO.name, createPlaylistDTO.description);
    }

    @Get()
    async getAllPlaylists(): Promise<Playlist[]> {
        return this.playlistService.findAll()
    }

}
