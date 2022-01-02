import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  interpret: string;

  @Prop({ required: true })
  audioPath: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
