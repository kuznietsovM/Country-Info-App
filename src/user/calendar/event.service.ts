import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<Event>,
    ){}

    async insertMany(events: Event[]) : Promise<Event[]> {
        return await this.eventModel.create(events)
    }
}
