import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InterpretDocument = Interpret & Document;

@Schema()
export class Interpret {
    @Prop({ required: true })
    name: string
}

export const InterpretSchema = SchemaFactory.createForClass(Interpret);