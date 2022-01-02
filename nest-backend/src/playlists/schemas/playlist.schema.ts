import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Song} from "../../music/schemas/song.schema";
import * as mongoose from "mongoose";
import {Type} from "class-transformer";

export type PlaylistDocument = Playlist & Document;

@Schema()
export class Playlist {
    @Prop({ required: true })
    name: string

    @Prop({ required: false })
    description: string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }] })
    @Type(() => Song)
    owner: Song[];
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);