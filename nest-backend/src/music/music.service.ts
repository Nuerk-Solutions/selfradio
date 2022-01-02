import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './schemas/song.schema';

@Injectable()
export class MusicService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  async createSong(
    title: string,
    interpret: string,
    audioPath: string,
  ): Promise<Song> {
    const newSong = {
      title,
      interpret,
      audioPath,
    };
    const createdSong = new this.songModel(newSong);
    return createdSong.save();
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.find().exec();
  }
}
