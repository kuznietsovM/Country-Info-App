import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddHolidaysDto } from './dto/add-holidays.dto';
import { DateNagerService } from 'src/date-nager/date-nager.service';
import { UserParamsDto } from 'src/user/dto/user-params.dto';
import { CalendarService } from './calendar.service';
import { Event } from './schemas/event.schema';
import { EventService } from './event.service';

@Controller()
export class CalendarController {
  constructor(
    private dateNagerService: DateNagerService,
    private calendarService: CalendarService,
    private eventService: EventService,
  ) {}

  @Post('users/:userId/calendar/holidays')
  async createHolidays(
    @Param() params: UserParamsDto,
    @Body() body: AddHolidaysDto,
  ) {
    const holidays = await this.dateNagerService.publicHolidays(
      body.year,
      body.countryCode,
      body.holidays,
    );

    let calendar = await this.calendarService.findByUser(params.userId);
    if (!calendar) calendar = await this.calendarService.create(params.userId);

    const events: Event[] = holidays.map((holiday) => {
      return {
        calendarId: calendar.id,
        title: holiday.name,
        date: new Date(holiday.date),
      };
    });

    return await this.eventService.insertMany(events);
  }
}
