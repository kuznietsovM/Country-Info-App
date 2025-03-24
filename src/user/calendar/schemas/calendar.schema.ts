import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  },
})
export class Calendar {
  id: string;

  @Prop({ type: String, required: true })
  userId: string;
}

export const CalendarSchema = SchemaFactory.createForClass(Calendar);
