import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Calendar } from './schemas/calendar.schema';
import { Model } from 'mongoose';

@Injectable()
export class CalendarService {
  constructor(
    @InjectModel(Calendar.name) private readonly calendarModel: Model<Calendar>,
  ) {}

  async create(userId: string): Promise<Calendar> {
    return await this.calendarModel.create({ userId });
  }

  async findByUser(userId: string): Promise<Calendar | null> {
    return await this.calendarModel.findOne({ userId });
  }
}
