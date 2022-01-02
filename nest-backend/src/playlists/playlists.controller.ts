import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {Playlist} from "./schemas/playlist.schema";
import {PlaylistsService} from "./playlists.service";
import {Song} from "../music/schemas/song.schema";

@Controller('playlists')
export class PlaylistsController {
    constructor(private readonly playlistService: PlaylistsService) {}


    @Post("create")
    async createPlaylist(name: string, description?: string): Promise<Playlist> {
        return this.playlistService.createPlaylist(name, description);
    }

    @Get()
    async getAllPlaylists(): Promise<Playlist[]> {
        return this.playlistService.findAll()
    }

}
