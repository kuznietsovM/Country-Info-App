import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Calendar, CalendarSchema } from './schemas/calendar.schema';
import { CalendarController } from './calendar.controller';
import { DateNagerModule } from 'src/date-nager/date-nager.module';
import { EventSchema } from './schemas/event.schema';
import { EventService } from './event.service';

@Module({
  imports: [
    DateNagerModule,
    MongooseModule.forFeature([
      {
        name: Calendar.name,
        schema: CalendarSchema
      },
      {
        name: Event.name,
        schema: EventSchema
      }
    ]),
  ],
  providers: [CalendarService, EventService],
  controllers: [CalendarController]
})
export class CalendarModule {}
