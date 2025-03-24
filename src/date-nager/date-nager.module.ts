import { Module } from '@nestjs/common';
import { DateNagerService } from './date-nager.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [DateNagerService],
  exports: [DateNagerService],
})
export class DateNagerModule {}
