import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { DateNagerModule } from 'src/date-nager/date-nager.module';

@Module({
  imports: [DateNagerModule],
  controllers: [CountryController]
})
export class CountryModule {}
