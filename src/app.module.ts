import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { DateNagerModule } from './date-nager/date-nager.module';
import { ConfigModule } from '@nestjs/config';
import { CountriesNowModule } from './countries-now/countries-now.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { CalendarModule } from './user/calendar/calendar.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      ignoreEnvFile: true,
      isGlobal: true, 
    }),
    CountryModule, 
    DateNagerModule, 
    CountriesNowModule, 
    DatabaseModule,
    UserModule,
    CalendarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
