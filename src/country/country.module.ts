import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { DateNagerModule } from 'src/date-nager/date-nager.module';
import { CountriesNowModule } from 'src/countries-now/countries-now.module';

@Module({
  imports: [DateNagerModule, CountriesNowModule],
  controllers: [CountryController]
})
export class CountryModule {}
