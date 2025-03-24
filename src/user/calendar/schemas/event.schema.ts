import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id
        }
    }
})
export class Event {
    id?: string

    @Prop({type: SchemaTypes.ObjectId, required: true, ref: 'Calendar'})
    calendarId: string

    @Prop({type: String, required: true})
    title: string

    @Prop({type: Date, required: true})
    date: Date
}

export const EventSchema = SchemaFactory.createForClass(Event)