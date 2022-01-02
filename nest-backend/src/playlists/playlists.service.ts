import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Playlist, PlaylistDocument} from "./schemas/playlist.schema";
import {Song} from "../music/schemas/song.schema";

@Injectable()
export class PlaylistsService {
    constructor(@InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>) {}

    async createPlaylist(name: string, description: string): Promise<Playlist> {
        const newPlaylist = {
            name,
            description
        }
        const createdPlaylist = new this.playlistModel(newPlaylist);
        return createdPlaylist.save();
    }

    async findAll(): Promise<Playlist[]> {
        return this.playlistModel.find().exec();
    }

}
