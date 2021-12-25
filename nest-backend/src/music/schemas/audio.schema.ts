import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AudioDocument = Audio & Document;

@Schema()
export class Audio {
    @Prop()
    songId: string

    @Prop({ required: true })
    audio: {
        data: Buffer,
        contentType: string
    }
}

export const AudioSchema = SchemaFactory.createForClass(Audio);